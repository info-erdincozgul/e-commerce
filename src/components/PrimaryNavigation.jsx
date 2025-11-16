import {
  Search,
  ShoppingCart,
  ChartNoAxesColumnIncreasing,
  UserRound,
} from "lucide-react";

export default function PrimaryNavigation() {
  return (
    <nav className="my-8 mx-auto w-5/6 sm:w-9/10 flex flex-wrap sm:flex-nowrap font-[Montserrat,sans-serif] sm:justify-between sm:items-center">
      <span className="w-1/2 sm:w-auto text-ebonyClay font-bold text-2xl cursor-pointer">BrandName</span>
      <div className="flex gap-x-4 font-semibold text-doveGray hidden sm:flex">
        <span className="hover:text-ebonyClay cursor-pointer">Home</span>
        <span className="hover:text-ebonyClay cursor-pointer">Shop</span>
        <span className="hover:text-ebonyClay cursor-pointer">About</span>
        <span className="hover:text-ebonyClay cursor-pointer">Blog</span>
        <span className="hover:text-ebonyClay cursor-pointer">Contact</span>
        <span className="hover:text-ebonyClay cursor-pointer">Pages</span>
      </div>
      <span className="flex gap-x-6 w-1/2 justify-end sm:text-pictonBlue">
        <div className="hidden sm:flex">
          <UserRound  className="w-5"/>
          <span className="font-bold hover:text-ebonyClay cursor-pointer">Login / Register</span>
        </div>
        <Search className="hover:text-ebonyClay cursor-pointer"/>
        <ShoppingCart className="hover:text-ebonyClay cursor-pointer"/>
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
