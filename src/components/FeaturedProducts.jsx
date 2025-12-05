import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import useAxios, { METHODS } from "../hooks/useAxios";
import { useEffect } from "react";
import { useData } from "../hooks/useData";
import { setProductList } from "../store/actions/ProductAction";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function FeaturedProducts() {
  const dispatch = useDispatch();
  const { sendRequest: sendGetRequest } = useAxios({});
  let productData = useData("product");
  let productsInfo = productData?.productList?.products || [];

  useEffect(() => {
    sendGetRequest({
      url: `/products?category=3&limit=8&offset=0`,
      method: METHODS.GET,
      callbackSuccess: (response) => {
        dispatch(setProductList(response.data));
      },
    });
  }, []);

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
      <div className="w-8/10 mx-auto">
        <div className=" sm:hidden sm:flex-wrap sm:w-full sm:items-center">
          {productsInfo.slice(0, 4).map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
      <div className="w-8/10 mx-auto">
        <div className="hidden sm:flex sm:flex-wrap sm:w-full sm:items-center">
          {productsInfo.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
      <div className="py-18">
        <button className="border-1 border-solid rounded py-4 px-8 text-sm font-bold text-pictonBlue hover:bg-pictonBlue hover:text-white cursor-pointer">
          <Link to="/shop/kadin/ceket/3">LOAD MORE PRODUCTS</Link>
        </button>
      </div>
    </section>
  );
}
