import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col mx-auto my-20 text-center font-[Montserrat,sans-serif]">
      <div className="flex flex-col text-doveGray items-center gap-y-4 my-8">
        <span className="text-2xl hidden sm:inline">Featured Products</span>
        <span className="text-ebonyClay text-2xl font-bold w-1/2">
          BESTSELLER PRODUCTS
        </span>
        <span className="font-semibold w-2/3">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div className="sm:flex sm:w-6/10 mx-auto sm:gap-x-8">
      PRODUCT KARTLARI LAZIM
      </div>
      <div className="py-18">
        <button className="border-1 border-solid rounded py-4 px-8 text-sm font-bold text-pictonBlue hover:bg-pictonBlue hover:text-white cursor-pointer">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </section>
  );
}
