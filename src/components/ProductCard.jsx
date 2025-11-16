export default function ProductCard({ index }) {
  let imgUrl = `/featuredProducts/product-cover-${index}.png`;
  return (
    <div className="flex flex-col items-center w-3/4 mx-auto my-4 gap-y-4">
      <img src={imgUrl} alt="" className="cursor-pointer"/>
      <span className="text-ebonyClay font-bold cursor-pointer">Graphic Design</span>
      <span className="text-doveGray font-semibold text-sm cursor-pointer">English Department</span>
      <div className="flex gap-x-2">
        <span className="text-silver font-semibold">$16.48 </span>
        <span className="text-eucalyptus font-bold">$6.48</span>
      </div>
    </div>
  );
}
