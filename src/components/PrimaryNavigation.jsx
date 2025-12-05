import {
  Search,
  ShoppingCart,
  ChartNoAxesColumnIncreasing,
  UserRound,
} from "lucide-react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useData } from "../hooks/useData";

export default function PrimaryNavigation() {
  let userData = useData("client");
  let productData = useData("product");
  let shoppingCartData = useData("shoppingCart");

  const categories = productData?.categories || [];
  const cartList = shoppingCartData?.cart || [];

  const womenCategories = categories
    .filter((cat) => cat.gender === "k")
    .slice(0, 5);

  const menCategories = categories
    .filter((cat) => cat.gender === "e")
    .slice(0, 5);

  let user = userData.user;
  let isLoggedIn = user && user.userInfo.name && user.userInfo.email;

  const totalItems = cartList.reduce((sum, item) => sum + item.count, 0);

  const totalPrice = cartList.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  return (
    <nav className="my-8 mx-auto w-5/6 sm:w-9/10 flex flex-wrap sm:flex-nowrap font-[Montserrat,sans-serif] sm:justify-between sm:items-center">
      <span className="w-1/2 sm:w-auto text-ebonyClay font-bold text-2xl cursor-pointer">
        BrandName
      </span>
      <div className="flex gap-x-4 font-semibold text-doveGray hidden sm:flex">
        <Link to="/">
          <span className="hover:text-ebonyClay cursor-pointer">Home</span>
        </Link>
        <Menu as="div" className="relative inline-block">
          <MenuButton className="inline-flex w-full text-ebonyClay justify-center font-semibold hover:bg-white/20">
            Shop
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-ebonyClay"
            />
          </MenuButton>
          <MenuItems
            transition
            className="flex absolute left-0 top-12 z-10 mt-2 origin-top-right bg-white outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1 w-40">
              <MenuItem>
                <span className="block px-4 py-2 text-sm text-ebonyClay data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden">
                  <Link to="/shop/kadin">Woman</Link>
                </span>
              </MenuItem>
              <MenuItem>
                <span className="block px-4 py-2"></span>
              </MenuItem>

              {womenCategories.map((category) => (
                <MenuItem key={category.id}>
                  <span className="block px-4 py-2 text-sm text-doveGray data-focus:bg-pictonBlue data-focus:text-white">
                    <Link
                      to={`/shop/kadin/${category.code.slice(2)}/${
                        category.id
                      }`}
                    >
                      {category.title}
                    </Link>
                  </span>
                </MenuItem>
              ))}
            </div>

            <div className="py-1 w-40">
              <MenuItem>
                <span className="block px-4 py-2 text-sm text-ebonyClay data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden">
                  <Link to="/shop/erkek">Man</Link>
                </span>
              </MenuItem>

              <MenuItem>
                <span className="block px-4 py-2"></span>
              </MenuItem>

              {menCategories.map((category) => (
                <MenuItem key={category.id}>
                  <span className="block px-4 py-2 text-sm text-doveGray data-focus:bg-pictonBlue data-focus:text-white">
                    <Link
                      to={`/shop/erkek/${category.code.slice(2)}/${
                        category.id
                      }`}
                    >
                      {category.title}
                    </Link>
                  </span>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
        <span className="hover:text-ebonyClay cursor-pointer">
          <Link to="/about-us">About</Link>
        </span>
        <span className="hover:text-ebonyClay cursor-pointer">Blog</span>
        <span className="hover:text-ebonyClay cursor-pointer">
          <Link to="/contact-us">Contact</Link>
        </span>
        <span className="hover:text-ebonyClay cursor-pointer">Pages</span>
      </div>
      <span className="flex gap-x-6 w-1/2 justify-end sm:text-pictonBlue">
        <div className="hidden sm:flex">
          <span className="font-bold hover:text-ebonyClay cursor-pointer">
            {isLoggedIn ? (
              <Menu as="div" className="relative inline-block text-left">
                             
                <MenuButton className="inline-flex items-center text-ebonyClay font-bold hover:text-gray-700 transition">
                                  <UserRound className="w-5 mr-1" />           
                      {user.userInfo.name}
                                 
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                               
                </MenuButton>
                             
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                                 
                  <div className="py-1">
                                                
                    <MenuItem as="div"> 
                                         
                      <Link
                        to="/previous-orders"
                        className="block px-4 py-2 text-sm text-doveGray data-focus:bg-gray-100"
                      >
                                              Previous Orders                  
                         
                      </Link>
                                       
                    </MenuItem>
                                                     
                  </div>
                               
                </MenuItems>
                           
              </Menu>
            ) : (
              <div className="flex items-center gap-1">
                <UserRound className="w-5" />
                <span className="font-bold hover:text-ebonyClay cursor-pointer">
                  <Link to="/login">Login</Link> /
                  <Link to="/signup">Register</Link>
                </span>
              </div>
            )}
          </span>
        </div>
        <Search className="hover:text-ebonyClay cursor-pointer" />

        <Menu as="div" className="relative inline-block">
          <MenuButton className="relative inline-flex w-full text-pictonBlue justify-center font-semibold hover:bg-white/20">
            <ShoppingCart className="hover:text-ebonyClay cursor-pointer w-6 h-6" />
            {/* Sepet badge */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </MenuButton>
          <MenuItems
            transition
            className="absolute right-0 mt-2 w-80 sm:w-96 z-50 origin-top-right bg-white rounded-md shadow-lg border border-gray-200 focus:outline-none p-4"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="font-bold text-lg text-ebonyClay">
                  Shopping Cart
                </h3>
                <span className="text-sm text-doveGray">
                  {totalItems} items
                </span>
              </div>

              {cartList.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-doveGray">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="max-h-64 overflow-y-auto space-y-3">
                    {cartList.map((cartItem) => (
                      <MenuItem key={cartItem.id || cartItem.product?.id}>
                        {({ focus }) => (
                          <div
                            className={`flex items-center p-2 rounded ${
                              focus ? "bg-gray-50" : ""
                            }`}
                          >
                            <img
                              src={cartItem.product?.images?.[0]?.url}
                              alt={cartItem.product?.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-3 flex-1">
                              <h4 className="font-semibold text-sm text-ebonyClay">
                                {cartItem.product?.name}
                              </h4>
                              <p className="text-xs text-doveGray truncate">
                                {cartItem.product?.description}
                              </p>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-sm font-medium">
                                  Quantity: {cartItem.count}
                                </span>
                                <span className="font-bold text-pictonBlue">
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

                  <div className="border-t pt-3">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-ebonyClay">Total:</span>
                      <span className="text-xl font-bold text-ebonyClay">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to="/shopping-cart"
                        className="flex-1 bg-pictonBlue text-white text-center py-2 rounded hover:bg-blue-600 transition"
                      >
                        View Cart
                      </Link>
                      <Link
                        to="/orders"
                        className="flex-1 bg-ebonyClay text-white text-center py-2 rounded hover:bg-gray-800 transition"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          </MenuItems>
        </Menu>

        <ChartNoAxesColumnIncreasing className="rotate-270 hover:text-ebonyClay cursor-pointer" />
      </span>
      <div className="my-20 gap-y-6 flex flex-col w-1/1 items-center text-3xl text-doveGray font-medium sm:hidden">
        <span>Home</span>
        <span>Product</span>
        <span>Pricing</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}
