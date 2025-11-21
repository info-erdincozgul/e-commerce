import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Footer() {
  return (
    <footer className="font-[Montserrat,sans-serif]">
      <div className="bg-alabaster py-12">
        <div className="w-3/4 mx-auto flex flex-col gap-y-4  sm:flex-row sm:justify-between sm:w-7/10">
          <span className="text-ebonyClay text-2xl font-bold sm:text-3xl">
            Bandage
          </span>
          <div className="flex text-pictonBlue gap-x-4 sm:px-24">
            <Facebook className="hover:text-ebonyClay cursor-pointer" />
            <Instagram className="hover:text-ebonyClay cursor-pointer" />{" "}
            <Twitter className="hover:text-ebonyClay cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-3/4 my-12 mx-auto sm:w-7/10">
        <div className="flex flex-col gap-y-6 text-sm font-semibold text-doveGray sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <span className="text-ebonyClay text-base font-bold sm:text-xl">
              Company Info
            </span>
            <ul className="flex flex-col gap-y-2 sm:font-bold">
              <li className="hover:text-mercury cursor-pointer"><Link to="/about-us">About Us</Link></li>
              <li className="hover:text-mercury cursor-pointer">Carrier</li>
              <li className="hover:text-mercury cursor-pointer">We are hiring</li>
              <li className="hover:text-mercury cursor-pointer">Blog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <span className="text-ebonyClay text-base font-bold sm:text-xl">
              Legal
            </span>
            <ul className="flex flex-col gap-y-2 sm:font-bold">
              <li className="hover:text-mercury cursor-pointer"><Link to="/about-us">About Us</Link></li>
              <li className="hover:text-mercury cursor-pointer">Carrier</li>
              <li className="hover:text-mercury cursor-pointer">We are hiring</li>
              <li className="hover:text-mercury cursor-pointer">Blog</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <span className="text-ebonyClay text-base font-bold sm:text-xl">
              Features
            </span>
            <ul className="flex flex-col gap-y-2 sm:font-bold">
              <li className="hover:text-mercury cursor-pointer">Business Marketing</li>
              <li className="hover:text-mercury cursor-pointer">User Analytic</li>
              <li className="hover:text-mercury cursor-pointer">Live Chat</li>
              <li className="hover:text-mercury cursor-pointer">Unlimited Support</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <span className="text-ebonyClay text-base font-bold sm:text-xl">
              Resources
            </span>
            <ul className="flex flex-col gap-y-2 sm:font-bold sm:gap-y-4">
              <li className="hover:text-mercury cursor-pointer">IOS & Android</li>
              <li className="hover:text-mercury cursor-pointer">Watch a Demo</li>
              <li className="hover:text-mercury cursor-pointer">Customers</li>
              <li className="hover:text-mercury cursor-pointer">API</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4 sm:gap-y-6">
            <span className="text-ebonyClay text-base font-bold sm:text-xl">
              Get In Touch
            </span>
            <form className="sm:flex sm:flex-wrap sm:w-4/5 sm:gap-y-2">
              <input
                type="text"
                defaultValue={"Your Email"}
                className="bg-alabaster border-solid border-1 rounded-l-lg border-mercury text-doveGray px-6 w-2/3 h-15 sm:w-6/9"
              />
              <button className="bg-pictonBlue  py-5 px-4 rounded-r-lg text-white sm:w-3/9 hover:bg-ebonyClay ">
                Subscribe
              </button>
              <label className="text-xs">Lore imp sum dolor Amit</label>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-alabaster text-center py-8 flex justify-center">
        <span className="text-doveGray font-bold w-4/7 sm:text-left sm:w-7/10">
          Made With Love By Findland All Right Reserved
        </span>
      </div>
    </footer>
  );
}
