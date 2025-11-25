import {
  Search,
  ShoppingCart,
  ChartNoAxesColumnIncreasing,
  UserRound,
} from "lucide-react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function PrimaryNavigation() {
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
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-ebonyClay outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <span className="block px-4 py-2 text-sm text-white data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden">
                  <Link to="/shop">Shop</Link>
                </span>
              </MenuItem>
              <MenuItem>
                <span className="block px-4 py-2 text-sm text-white data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden">
                  Menu 2
                </span>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white data-focus:bg-pictonBlue data-focus:text-white data-focus:outline-hidden"
                >
                  Menu 3
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
        <span className="hover:text-ebonyClay cursor-pointer"><Link to="/about-us">About</Link></span>
        <span className="hover:text-ebonyClay cursor-pointer">Blog</span>
        <span className="hover:text-ebonyClay cursor-pointer"><Link to="/contact-us">Contact</Link></span>
        <span className="hover:text-ebonyClay cursor-pointer">Pages</span>
      </div>
      <span className="flex gap-x-6 w-1/2 justify-end sm:text-pictonBlue">
        <div className="hidden sm:flex">
          <UserRound className="w-5" />
          <span className="font-bold hover:text-ebonyClay cursor-pointer">
            Login / <Link to="/signup">Register </Link>
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
