export default function ShopNavCard({ index }) {
  let imgUrl = `/shop/shop-card-${index}.png`;
  return (
    <>
      <div className="text-white font-medium w-8/10 relative">
        <img src={imgUrl} alt="" className="w-full h-full invert-15" />
        <span className="absolute top-2/5 left-2/5">CLOTHS</span>
        <span className="absolute top-3/5 left-2/5">5 Items</span>
      </div>
    </>
  );
}
