import {
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
  StarHalf,
} from "lucide-react";
import MyCarousel from "./Carousel";
import ProductCard from "./ProductCard";

export default function ProductDetail() {
  return (
    <section className="flex flex-col items-center gap-y-4 mx-auto font-[Montserrat,sans-serif] sm:items-start sm:w-7/10">
      <div className="flex items-center w-8/10  font-bold my-24 sm:my-12 sm:w-7/10">
        <span className="text-ebonyClay">Home</span>
        <ChevronRight className="w-6 h-6 text-silver" />
        <span className="text-doveGray">Shop</span>
      </div>
      <div className="flex flex-col w-8/10 gap-y-8 sm:flex-row sm:gap-x-24">
        <div className="sm:w-1/2">
          <MyCarousel />
        </div>
        <div className="flex flex-col gap-y-4 w-8/10 mx-auto sm:w-1/2 sm:my-8 sm:gap-y-6">
          <span className="text-ebonyClay text-xl font-medium">
            Floating Phone
          </span>
          <div className="flex text-sunglow items-center">
            <Star className="color-black" />
            <Star />
            <Star />
            <Star />
            <StarHalf />
            <span className="text-doveGray font-bold text-sm">10 Reviews</span>
          </div>
          <span className="text-2xl text-ebonyClay font-bold">$1,139.33</span>
          <span className="text-doveGray font-bold text-sm">
            Aviability : <span className="text-pictonBlue">In Stock</span>
          </span>
          <span className="text-doveGray font-medium sm:w-6/8">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT offical consequest door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </span>
          <div className="border-1 border-mercury w-full sm:w-6/8"></div>
          <div className="flex gap-x-2">
            <div className="w-8 h-8 rounded-full bg-pictonBlue cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-eucalyptus cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-burnSienna cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-ebonyClay cursor-pointer"></div>
          </div>
          <div className="flex justify-between my-4 sm:w-6/8 sm:justify-start sm:gap-x-4 sm:my-16">
            <button className="py-2 px-4 border bg-pictonBlue text-white rounded-sm">
              Select Options
            </button>
            <Heart className="text-ebonyClay bg-white p-2 rounded-full w-9 h-9 hover:bg-ebonyClay hover:text-white cursor-pointer" />
            <ShoppingCart className=" text-ebonyClay bg-white p-2 rounded-full w-9 h-9 hover:bg-ebonyClay hover:text-white cursor-pointer" />
            <Eye className=" text-ebonyClay bg-white p-2 rounded-full w-9 h-9 hover:bg-ebonyClay hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-doveGray w-8/10 text-sm font-bold flex gap-x-2 sm:mx-auto mt-16 sm:w-full sm:justify-center">
        <span className="underline">Description</span>
        <span>Additional Information</span>
        <span>Reviews</span>
      </div>
      <div className="hidden sm:flex w-8/10 sm:w-full sm:border-1 sm:border-mercury sm:my-8"></div>
      <div className="flex flex-col w-8/10 gap-y-12 sm:flex-row sm:gap-x-12 sm:w-full">
        <img
          src="/productDetail/product-detail-desc.png"
          alt=""
          className="aspect-5/4 sm:w-1/3 sm:h-full sm:aspect-1/1"
        />
        <div className="flex flex-col gap-y-6 sm:w-1/3">
          <span className="text-ebonyClay text-xl font-bold">
            the quick fox jumps over
          </span>
          <span className="text-doveGray text-sm font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT offical consequest door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </span>
          <span className="text-doveGray text-sm font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT offical consequest door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </span>
          <span className="text-doveGray text-sm font-semibold">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT offical consequest door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </span>
        </div>
        <div className="flex flex-col gap-y-8 sm:w-1/3">
          <div className="flex flex-col gap-y-4">
            <span className="text-ebonyClay text-xl font-bold">
              the quick fox jumps over
            </span>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <span className="text-ebonyClay text-xl font-bold">
              the quick fox jumps over
            </span>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline text-doveGray text-sm font-bold gap-x-2">
              <ChevronRight className="w-6 h-6 text-silver" />{" "}
              <span>the quick fox jumps over the lazy dog</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-12 gap-y-6 sm:w-full sm:items-start sm:mt-24">
        <span className="text-ebonyClay text-2xl font-bold">BESTSELLER PRODUCTS</span>
        <div className="border-1 border-mercury w-8/10 sm:w-full"></div>
        <div className="flex flex-col gap-y-4 sm:flex-row"><ProductCard index="1b"/><ProductCard index="2b"/><ProductCard index="3b"/><ProductCard index="4b"/></div>
        <div className="hidden sm:flex "><ProductCard index="1b"/><ProductCard index="2b"/><ProductCard index="3b"/><ProductCard index="4b"/></div>
      </div>
    </section>
  );
}
