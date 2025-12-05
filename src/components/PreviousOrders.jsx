import { useState, useEffect } from "react";
import useAxios, { METHODS } from "../hooks/useAxios";
import { Loader2, ChevronDown, ChevronUp } from "lucide-react";

export default function PreviousOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const { sendRequest } = useAxios({});
  const token = localStorage.getItem("token");
  const header = { Authorization: token };

  const fetchOrders = () => {
    setLoading(true);
    setError(null);
    sendRequest({
      url: "/order",
      method: METHODS.GET,
      headers: header,
      callbackSuccess: (res) => {
        setOrders(res.data);
        setLoading(false);
      },
      callbackError: (err) => {
        console.error("Siparişler yüklenemedi:", err);
        setError("Siparişler yüklenirken bir hata oluştu.");
        setLoading(false);
      },
    });
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    } else {
      setLoading(false);
      setError("Lütfen siparişlerinizi görmek için giriş yapın.");
    }
  }, []);

  const toggleDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />       
        <span>Orders Loading...</span>     
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
           
      <h2 className="text-3xl font-bold text-ebonyClay mb-6 border-b pb-2">
        Previous Orders
      </h2>
           
      {orders.length === 0 ? (
        <div className="text-center py-10 text-doveGray">
          No previous orders found.
        </div>
      ) : (
        <div className="space-y-4">
                   
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg shadow-md border border-mercury"
            >
                                   
              <div
                className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition"
                onClick={() => toggleDetails(order.id)}
              >
                               
                <div className="flex-1">
                                   
                  <span className="font-semibold text-ebonyClay">
                    Order ID: {order.id}
                  </span>
                                   
                  <p className="text-sm text-doveGray">
                    Date: {new Date(order.order_date).toLocaleDateString()}
                  </p>
                                 
                </div>
                               
                <div className="text-right">
                                   
                  <span className="text-lg font-bold text-pictonBlue">
                    ${order.price.toFixed(2)}
                  </span>
                                   
                  {expandedOrderId === order.id ? (
                    <ChevronUp className="w-5 h-5 ml-2 inline-block text-ebonyClay" />
                  ) : (
                    <ChevronDown className="w-5 h-5 ml-2 inline-block text-ebonyClay" />
                  )}
                                 
                </div>
                             
              </div>
                             
              {expandedOrderId === order.id && (
                <div className="border-t p-4 bg-gray-50">
                                   
                  <h4 className="font-semibold mb-2 text-ebonyClay">
                    Items Ordered:
                  </h4>
                                   
                  <ul className="list-disc ml-5 space-y-1 text-sm text-doveGray">
                                             
                    {order.products && order.products.length > 0 ? (
                      order.products.map((item, index) => (
                        <li key={index} className="flex justify-between">
                                                   
                          <span>
                            {item.count} x {item.product_id} {(item.name)}
                          </span>
                                                               
                          <span className="font-medium text-ebonyClay">
                            ${(item.price * item.count || 0).toFixed(2)}
                          </span>
                                                 
                        </li>
                      ))
                    ) : (
                      <li>Product Detail Not Found.</li>
                    )}
                                     
                  </ul>
                                 
                </div>
              )}
                         
            </div>
          ))}
                 
        </div>
      )}
         
    </div>
  );
}
