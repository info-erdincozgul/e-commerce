import { useData } from "../hooks/useData";
import { Menu, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Minus, Trash2, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeFromCart, setCart } from "../store/actions/ShoppinCartAction";
import { useState } from "react";

export default function Cart() {
  let shoppingCartData = useData("shoppingCart");
  const cartList = shoppingCartData?.cart || [];
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);

  const totalItems = cartList.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cartList
    .filter((item) => item.checked === true)
    .reduce((sum, item) => sum + item.product.price * item.count, 0);

  const handleCheckboxChange = (productId, isChecked) => {
    const cartItem = cartList.find((item) => item.product.id === productId);
    if (cartItem) {
      dispatch(
        setCart({
          count: 0,
          checked: isChecked,
          product: cartItem.product,
        })
      );
    }
  };

  const handleCountChange = (productId, change) => {
    const cartItem = cartList.find((item) => item.product.id === productId);
    if (cartItem) {
      dispatch(
        setCart({
          count: change,
          product: cartItem.product,
          checked: cartItem.checked,
        })
      );
    }
  };

  const handleRemoveItem = (productId) => {
    const cartItem = cartList.find((item) => item.product.id === productId);
    if (cartItem) {
      dispatch(removeFromCart(productId));
    }
  };

  return (
    <div className="w-9/10 mx-auto sm:w-7/10 sm:my-24 flex flex-col sm:flex-row gap-x-8 gap-y-8 font-[Montserrat,sans-serif]">
      <Menu as="div">
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold text-lg text-ebonyClay">Shopping Cart</h3>
            <span className="text-sm text-doveGray">{totalItems} items</span>
          </div>

          {cartList.length === 0 ? (
            <div className="text-center py-8 ">
              <p className="text-doveGray">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="max-h-150 sm:max-h-full overflow-y-auto space-y-3">
                {cartList.map((cartItem) => (
                  <MenuItem key={cartItem.product?.id}>
                    {({ focus }) => (
                      <div
                        className={`flex items-center p-2 gap-x-4 rounded  ${
                          focus ? "bg-gray-50 " : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="w-6 h-6"
                          checked={cartItem.checked || false}
                          onChange={(e) =>
                            handleCheckboxChange(
                              cartItem.product.id,
                              e.target.checked
                            )
                          }
                        />
                        <img
                          src={cartItem.product?.images?.[0]?.url}
                          alt={cartItem.product?.name}
                          className="w-40 object-cover rounded"
                        />
                        <div className="flex flex-col gap-y-8 px-4 sm:justify-between sm:w-full">
                          <h4 className="font-semibold text-xl sm:text-3xl text-ebonyClay">
                            {cartItem.product?.name}
                          </h4>
                          <p className="text-medium sm:text-2xl text-doveGray sm:truncate">
                            {cartItem.product?.description}
                          </p>
                          <div className="flex flex-col gap-y-4">
                            <div className="flex h-6 sm:h-8 gap-x-4">
                              <div className="flex">
                                <Minus
                                  onClick={() =>
                                    handleCountChange(cartItem.product.id, -1)
                                  }
                                  className={`border border-mercury h-full cursor-pointer ${
                                    cartItem.count <= 1
                                      ? "text-silver cursor-not-allowed"
                                      : "text-ebonyClay"
                                  }`}
                                  disabled={cartItem.count <= 1}
                                />
                                <span className="border border-mercury text-ebonyClay w-8 h-full flex justify-center items-center">
                                  {cartItem.count}
                                </span>
                                <Plus
                                  onClick={() =>
                                    handleCountChange(cartItem.product.id, 1)
                                  }
                                  className="border border-mercury text-ebonyClay h-full cursor-pointer"
                                />
                              </div>
                              <Trash2
                                onClick={() =>
                                  handleRemoveItem(cartItem.product.id)
                                }
                                className="cursor-pointer text-doveGray hover:text-red-500"
                              />
                            </div>
                            <span className="font-bold text-pictonBlue sm:text-xl">
                              $
                              {(
                                cartItem.product?.price * cartItem.count
                              ).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </MenuItem>
                ))}
              </div>
            </>
          )}
        </div>
      </Menu>
      <div className="flex flex-col gap-y-6 items-start w-8/10 mx-auto sm:w-1/4">
        <button className="bg-ebonyClay text-white text-center py-2 rounded px-20 py-4 w-full">
          Confirm Order
        </button>
        <div className="flex flex-col gap-y-6 text-sm ebonyGray w-full">
          <span className="text-xl">Detail</span>
          <div className="flex flex-col border border-mercury px-8 py-12 gap-y-4">
            <span>Order Total: ${totalPrice.toFixed(2)}</span>
            <span className="text-pictonBlue">Shipping : $27</span>
          </div>
        </div>
        <div>
          <span className="text-pictonBlue font-bold">Total: ${totalPrice + 27}</span>
        </div>
        <button className="bg-ebonyClay text-white text-center py-2 rounded px-20 py-4 w-full">
          Confirm Order
        </button>
      </div>
    </div>
  );
}
