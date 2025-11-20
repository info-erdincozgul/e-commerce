import { ChevronRight } from "lucide-react";
import ShopNavCard from "./ShopNavCard";

export default function ShopNav() {
  return (
    <nav className="font-[Montserrat,sans-serif] flex flex-col gap-y-16 sm:w-7/10 sm:mx-auto sm:gap-y-8">
      <div className="flex flex-col text-center items-center gap-y-16 sm:flex-row sm:justify-between sm:w-14/15 sm:mx-auto">
        <span className="sm:w-auto text-ebonyClay font-bold text-2xl cursor-pointer">
          Shop
        </span>
        <div className="flex items-center font-bold">
          <span className="text-ebonyClay">Home</span>
          <ChevronRight className="w-6 h-6 text-silver" />
          <span className="text-doveGray">Shop</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-4">
        <ShopNavCard index="1" />
        <ShopNavCard index="2" />
        <ShopNavCard index="3" />
        <ShopNavCard index="4" />
        <ShopNavCard index="5" />
      </div>
    </nav>
  );
}
