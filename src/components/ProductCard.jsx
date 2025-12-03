import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductCard({ data }) {
  const { id, price, name, description, images, category_id } = data;
  const { gender, categoryName } = useParams();

  return (
    <Link
      to={`/shop/${gender}/${categoryName}/${category_id}/${name}/${id}`}
      className="w-full sm:w-1/5 p-2 mx-8 font-[Montserrat,sans-serif]"
    >
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
