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

  const categories = productData?.categories || [];

  const womenCategories = categories
    .filter((cat) => cat.gender === "k")
    .slice(0, 5);
  const menCategories = categories
    .filter((cat) => cat.gender === "e")
    .slice(0, 5);

  let user = userData.user;
  let isLoggedIn = user && user.userInfo.name && user.userInfo.email;
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
                <span className="block px-4 py-2">
                  
                </span>
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
                <span className="block px-4 py-2">
                  
                </span>
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
              <div className="flex items-center gap-2">
                <span className="font-bold text-ebonyClay">
                  {user.userInfo.name}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <UserRound className="w-5" />
                <span className="font-bold hover:text-ebonyClay cursor-pointer">
                  <Link to="/login">Login</Link> /{" "}
                  <Link to="/signup">Register</Link>
                </span>
              </div>
            )}
          </span>
        </div>
        <Search className="hover:text-ebonyClay cursor-pointer" />
        <ShoppingCart className="hover:text-ebonyClay cursor-pointer" />
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
