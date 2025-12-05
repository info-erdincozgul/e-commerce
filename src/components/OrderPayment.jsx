import React, { useState, useEffect } from "react";
import { Plus, Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { useData } from "../hooks/useData"; 
import useAxios, { METHODS } from "../hooks/useAxios"; 
import CardForm from "./CardForm"; 
import CardCard from "./CardCard";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setPayment } from "../store/actions/ShoppinCartAction";

export default function PaymentType() {
  const dispatch = useDispatch();
  
  const shoppingCartData = useData("shoppingCart");
  const cardList = shoppingCartData?.payment || []; 
  const cartList = shoppingCartData?.cart || [];
  
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [apiLoading, setApiLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const token = localStorage.getItem("token");
  const header = { Authorization: token }; 

  const { sendRequest } = useAxios({}); 

  const totalPrice = cartList
    .filter((item) => item.checked === true)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  const refreshCards = (initialLoad = false) => {
    setApiLoading(true);
    sendRequest({
      url: "/user/card",
      method: METHODS.GET,
      headers: header,
      callbackSuccess: (res) => {
        dispatch(setPayment(res.data));
        setApiLoading(false);
        if (initialLoad && res.data.length > 0) {
          setSelectedCardId(res.data[0].id);
        } else if (!selectedCardId && res.data.length > 0) {
          setSelectedCardId(res.data[0].id);
        } else if (selectedCardId && !res.data.find(card => card.id === selectedCardId)) {
          setSelectedCardId(res.data.length > 0 ? res.data[0].id : null);
        }
      },
      callbackError: (error) => {
        setApiError(error.message);
        setApiLoading(false);
        console.error("Failed to load cards", error);
      }
    });
  };

  useEffect(() => {
    refreshCards(true);
  }, []);

  const handleCardSubmit = (formData) => {
    setApiLoading(true);
    setApiError(null);
    
    const isUpdate = !!editingCard;
    const method = isUpdate ? METHODS.PUT : METHODS.POST;
    const payload = isUpdate ? { ...formData, id: editingCard.id } : formData;

    sendRequest({
      url: "/user/card",
      method: method,
      headers: header,
      data: payload,
      callbackSuccess: () => {
        refreshCards();
        handleCancel();
        alert(`Card successfully ${isUpdate ? 'updated' : 'added'}!`);
      },
      callbackError: (error) => {
        console.error("Card operation error:", error);
        setApiError(error.message);
        setApiLoading(false);
      },
    });
  };

  const handleDelete = (cardId) => {
    if(window.confirm("Are you sure you want to delete this card?")) {
      setApiLoading(true);
      setApiError(null);
      sendRequest({
        url: `/user/card/${cardId}`,
        method: METHODS.DELETE,
        headers: header,
        callbackSuccess: () => {
          refreshCards();
          alert("Card successfully deleted!");
        },
        callbackError: (error) => {
          console.error("Card deletion error:", error);
          setApiLoading(false);
          setApiError(error.message);
        }
      });
    }
  };

  const handleEditClick = (card) => {
    setApiError(null); 
    setEditingCard(card);
    setShowForm(true);
  };

  const handleCancel = () => {
    setApiError(null); 
    setShowForm(false); 
    setEditingCard(null);
  }

  return (
    <div className="min-h-screen py-8 font-[Montserrat,sans-serif] w-8/10 mx-auto">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="flex items-center gap-8 mb-8 border-b pb-4">
          <div className="opacity-50">
            <h2 className="text-xl font-bold text-silver flex items-center gap-2">
              <span className="text-2xl">1</span> Address Information
            </h2>
          </div>
          <div className="relative">
            <h2 className="text-xl font-bold text-ebonyClay flex items-center gap-2">
              <span className="text-2xl">2</span> Payment Type
            </h2>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-ebonyClay"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg text-ebonyClay">Select Payment Method</h3>
            </div>

            {apiLoading && (
              <div className="p-4 flex items-center gap-3 text-pictonBlue border border-mercury bg-mercury/50 rounded-lg mb-4">
                <Loader2 size={20} className="animate-spin" />
                <span>Cards are loading or processing, please wait...</span>
              </div>
            )}
            
            {apiError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
                Error: {apiError}. Please try again.
              </div>
            )}

            {showForm ? (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-mercury">
                <CardForm 
                  initialData={editingCard} 
                  onSubmit={handleCardSubmit}
                  onCancel={handleCancel}
                  isSubmitting={apiLoading} 
                  apiError={apiError} 
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  onClick={() => { setApiError(null); setEditingCard(null); setShowForm(true); }}
                  className="bg-white border-2 border-dashed border-mercury rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-pictonBlue hover:bg-pictonBlue transition min-h-[160px] group"
                >
                  <div className="bg-mercury/50 text-pictonBlue p-3 rounded-full mb-2 group-hover:bg-white">
                    <Plus size={24} />
                  </div>
                  <span className="font-semibold text-gray-600 group-hover:text-ebonyClay">Add New Card</span>
                </div>
                {cardList.length > 0 ? (
                  cardList.map((card) => (
                    <CardCard 
                      key={card.id}
                      card={card}
                      isSelected={selectedCardId === card.id}
                      onSelect={setSelectedCardId}
                      onEdit={handleEditClick}
                      onDelete={handleDelete}
                    />
                  ))
                ) : (
                  !apiLoading && (
                    <div className="text-gray-500 md:col-span-2">No saved cards found. Please add a new card.</div>
                  )
                )}
              </div>
            )}
          </div>
          
          <div className="flex flex-col gap-y-6 items-start w-full mx-auto lg:w-80">
            <Link
              to="/checkout"
              className={`text-white text-center py-2 rounded py-4 w-full cursor-pointer transition 
                ${selectedCardId ? "bg-ebonyClay hover:bg-gray-700" : "bg-silver cursor-not-allowed"}`}
              onClick={(e) => !selectedCardId && e.preventDefault()}
            >
              Complete Order
            </Link>
            
            <div className="flex flex-col gap-y-6 text-sm ebonyGray w-full bg-white p-4 rounded-lg shadow-sm border border-mercury">
              <span className="text-xl font-semibold text-ebonyClay">Order Summary</span>
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between">
                  <span>Products Total:</span> 
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-pictonBlue">
                  <span>Shipping:</span> 
                  <span>$27.00</span>
                </div>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg text-ebonyClay">
                <span>Total:</span> 
                <span className="text-pictonBlue">${(totalPrice + 27).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}