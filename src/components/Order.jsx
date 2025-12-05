import React, { useEffect, useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import { useData } from "../hooks/useData";
import useAxios, { METHODS } from "../hooks/useAxios";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { setAddress } from "../store/actions/ShoppinCartAction";

export default function Order({ handleAddress }) {
  const token = localStorage.getItem("token");
  const header = { Authorization: token };
  let shoppingCartData = useData("shoppingCart");
  const addressList = shoppingCartData?.address || [];
  const cartList = shoppingCartData?.cart || [];
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedAddressId, setSelectedAddressId] = useState(
    addressList[0]?.id || null
  );
  const [apiLoading, setApiLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const totalPrice = cartList
    .filter((item) => item.checked === true)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  const { loading, sendRequest } = useAxios({});
  const dispatch = useDispatch();

  const handleAddressSubmit = (data) => {
    setApiLoading(true);
    setApiError(null);

    if (editingAddress?.id) {
      sendRequest({
        url: `/user/address`,
        method: METHODS.PUT,
        headers: header,
        data: { ...data, id: editingAddress.id },
        callbackSuccess: () => {
          sendRequest({
            url: `/user/address`,
            method: METHODS.GET,
            headers: header,
            callbackSuccess: (response) => {
              dispatch(setAddress(response.data));
              setApiLoading(false);
              handleCancel();
              alert("Address updated successfully!");
            },
          });
        },
        callbackError: (error) => {
          console.error("Error updating address:", error);
          setApiError(error.message);
          setApiLoading(false);
        },
      });
    } else {
      sendRequest({
        url: `/user/address`,
        method: METHODS.POST,
        headers: header,
        data: data,
        callbackSuccess: () => {
          sendRequest({
            url: `/user/address`,
            method: METHODS.GET,
            headers: header,
            callbackSuccess: (response) => {
              dispatch(setAddress(response.data));
              setApiLoading(false);
              handleCancel();
              alert("Address added successfully!");
            },
          });
        },
        callbackError: (error) => {
          console.error("Error adding address:", error);
          setApiError(error.message);
          setApiLoading(false);
        },
      });
    }
  };

  const handleDelete = (addressId) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setApiLoading(true);
      sendRequest({
        url: `/user/address/${addressId}`,
        method: METHODS.DELETE,
        headers: header,
        callbackSuccess: () => {
          sendRequest({
            url: `/user/address`,
            method: METHODS.GET,
            headers: header,
            callbackSuccess: (response) => {
              dispatch(setAddress(response.data));
              setApiLoading(false);
              if (selectedAddressId === addressId) {
                setSelectedAddressId(null);
              }
              alert("Address deleted successfully!");
            },
          });
        },
        callbackError: (error) => {
          console.error("Error deleting address:", error);
          setApiLoading(false);
          setApiError(error.message);
        },
      });
    }
  };

  const handleEditClick = (address) => {
    setApiError(null);
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleCancel = () => {
    setApiError(null);
    setShowForm(false);
    setEditingAddress(null);
  };

  useEffect(() => {
    sendRequest({
      url: `/user/address`,
      method: METHODS.GET,
      headers: header,
      callbackSuccess: (response) => {
        dispatch(setAddress(response.data));
        if (response.data.length > 0 && !selectedAddressId) {
          setSelectedAddressId(response.data[0].id);
        }
      },
      callbackError: (error) => {
        console.error("Error fetching addresses:", error);
        setApiError(error.message);
      },
    });
  }, []);

  return (
    <div className="min-h-screen py-8 font-[Montserrat,sans-serif] w-8/10 mx-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-8 mb-8 border-b pb-4">
          <div className="relative">
            <h2 className="text-xl font-bold text-ebonyClay flex items-center gap-2">
              <span className="text-2xl">1</span> Address Information
            </h2>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-ebonyClay"></div>
          </div>
          <div className="opacity-50">
            <h2 className="text-xl font-bold text-silver flex items-center gap-2">
              <span className="text-2xl">2</span> Payment Type
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg text-silver">
                Delivery Address
              </h3>
              <label className="flex items-center gap-2 text-sm text-ebonyClay cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-pictonBlue w-4 h-4"
                  defaultChecked
                />
                Send my bill to same address
              </label>
            </div>
            {apiLoading && (
              <div className="p-4 flex items-center gap-3 text-orange-500 border border-orange-200 bg-orange-50 rounded-lg mb-4">
                <Loader2 size={20} className="animate-spin" />
                <span>Address is loading....</span>
              </div>
            )}
            {showForm ? (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <AddressForm
                  initialData={editingAddress}
                  onSubmit={handleAddressSubmit}
                  onCancel={handleCancel}
                  isSubmitting={apiLoading}
                  apiError={apiError}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  onClick={() => {
                    setApiError(null);
                    setEditingAddress(null);
                    setShowForm(true);
                  }}
                  className="bg-white border-2 border-dashed border-silver rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-pictonBlue hover:bg-pictonBlue transition min-h-[160px] group"
                >
                  <div className="bg-mercury text-silver p-3 rounded-full mb-2 group-hover:bg-white">
                    <Plus size={24} />
                  </div>
                  <span className="font-semibold text-gray-600 group-hover:text-white">
                    Yeni Adres Ekle
                  </span>
                </div>
                {addressList.length > 0
                  ? addressList.map((addr) => (
                      <AddressCard
                        key={addr.id}
                        address={addr}
                        isSelected={selectedAddressId === addr.id}
                        onSelect={setSelectedAddressId}
                        onEdit={handleEditClick}
                        onDelete={handleDelete}
                      />
                    ))
                  : !apiLoading && (
                      <div className="text-gray-500 md:col-span-2">
                        There are no address found...
                      </div>
                    )}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-6 items-start w-full mx-auto sm:w-1/4">
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleAddress(true, selectedAddressId);
              }}
              className="bg-ebonyClay text-white text-center py-2 rounded py-4 w-full cursor-pointer"
            >
              <button className="cursor-pointer">Save and Continue</button>
            </Link>
            <div className="flex flex-col gap-y-6 text-sm ebonyGray w-full">
              <span className="text-xl">Detail</span>
              <div className="flex flex-col border border-mercury px-8 py-12 gap-y-4">
                <span>Order Total: ${totalPrice.toFixed(2)}</span>
                <span className="text-pictonBlue">Shipping : $27</span>
              </div>
            </div>
            <div>
              <span className="text-pictonBlue font-bold">
                Total: ${(totalPrice + 27).toFixed(2)}
              </span>
            </div>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleAddress(true, selectedAddressId);
              }}
              className="bg-ebonyClay text-white text-center py-2 rounded py-4 w-full cursor-pointer"
            >
              <button className="cursor-pointer">Save and Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
