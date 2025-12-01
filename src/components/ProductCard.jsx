import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
  const { id, price, name, description, images } = data;

  return (
    <Link to={`/shop/${id}`} className="w-full sm:w-1/5 p-2 mx-8">
      <div className="flex flex-col items-center w-full mx-auto my-4 gap-y-4">
        <img
          src={images?.[0]?.url}
          alt={name}
          className="cursor-pointer w-full object-fit"
        />
        <span className="text-ebonyClay font-bold cursor-pointer text-center">
          {name}
        </span>
        <span className="text-doveGray font-semibold text-sm cursor-pointer text-center w-full px-2">
          {description}
        </span>
        <div className="flex gap-x-2">
          <span className="text-silver font-semibold line-through">
            ${price}
          </span>
          <span className="text-eucalyptus font-bold">
            ${(price * 0.7).toFixed(2)}
          </span>
        </div>
    </div>
    </Link>
  );
}
