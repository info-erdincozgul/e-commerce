import {
  ChevronRight,
  Eye,
  Heart,
  ShoppingCart,
  Star,
  StarHalf,
} from "lucide-react";
import MyCarousel from "./Carousel";
import { useData } from "../hooks/useData";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { setCart } from "../store/actions/ShoppinCartAction";
import ProductCard from "./ProductCard";

export default function ProductDetail() {
  let productData = useData("product");
  const { productId } = useParams();
  let productsInfo = productData?.productList?.products || [];
  let product = productsInfo.filter(
    (product) => product.id == Number(productId)
  );
  const fullStars = Math.floor(product[0].rating || 0);
  const hasHalfStar = (product[0].rating || 0) % 1 >= 0.5;

  const dispatch = useDispatch();

  return (
    <section className="flex flex-col items-center gap-y-4 mx-auto font-[Montserrat,sans-serif] sm:items-start sm:w-7/10">
      <div className="flex items-center w-8/10  font-bold my-24 sm:my-12 sm:w-7/10">
        <span className="text-ebonyClay">Home</span>
        <ChevronRight className="w-6 h-6 text-silver" />
        <span className="text-doveGray">Shop</span>
      </div>
      <div className="flex flex-col w-8/10 sm:w-full gap-y-8 sm:flex-row sm:gap-x-24">
        <div className="sm:w-1/2">
          <MyCarousel images={product[0]} />
        </div>
        <div className="flex flex-col gap-y-4 w-8/10 mx-auto sm:w-1/2 sm:my-8 sm:gap-y-6">
          <span className="text-ebonyClay text-xl font-medium">
            {product[0].name}
          </span>
          <div className="flex text-sunglow items-center">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={`full-${i}`} />
            ))}
            {hasHalfStar ? <StarHalf /> : null}
            <span className="text-doveGray font-bold text-sm">10 Reviews</span>
          </div>
          <span className="text-2xl text-ebonyClay font-bold">
            ${product[0].price}
          </span>
          <span className="text-doveGray font-bold text-sm">
            Aviability :{" "}
            <span className="text-pictonBlue">{product[0].stock} In Stock</span>
          </span>
          <span className="text-doveGray font-medium sm:w-6/8">
            {product[0].description}
          </span>
          <div className="border-1 border-mercury w-full sm:w-6/8"></div>
          <div className="flex gap-x-2">
            <div className="w-8 h-8 rounded-full bg-pictonBlue cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-eucalyptus cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-burnSienna cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-ebonyClay cursor-pointer"></div>
          </div>
          <div className="flex justify-between my-4 sm:w-6/8 sm:justify-start sm:gap-x-4 sm:my-16">
            <button
              onClick={() => {
                dispatch(
                  setCart({
                    count: 1,
                    checked: true,
                    product: product[0],
                  })
                );
              }}
              className="py-2 px-4 border bg-pictonBlue text-white rounded-sm cursor-pointer active:bg-ebonyClay"
            >
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
        <span className="text-ebonyClay text-2xl font-bold">
          BESTSELLER PRODUCTS
        </span>
        <div className="border-1 border-mercury w-8/10 sm:w-full"></div>
        <div className="w-8/10 mx-auto sm:w-full">
          <div className=" sm:hidden sm:flex-wrap sm:w-full sm:items-center">
            {productsInfo.slice(0, 4).map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
        <div className="w-8/10 mx-auto sm:w-full">
          <div className="hidden sm:flex sm:flex-wrap sm:w-full sm:items-center">
            {productsInfo.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
