export default function FeaturedContent() {
  return (
    <section className="flex flex-col items-center gap-y-12 my-12 sm:flex-row sm:w-7/10 sm:mx-auto sm:gap-x-36 font-[Montserrat,sans-serif]">
      <div className="flex flex-col w-2/3 gap-y-6 sm:w-1/2">
        <span className="text-pictonBlue font-bold sm:text-lg">Featured Products</span>
        <span className="text-ebonyClay text-5xl font-bold">We love what we do</span>
        <span className="text-doveGray font-semibold sm:w-1/2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</span>
        <span className="text-doveGray font-semibold sm:w-1/2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</span>
      </div>
      <div className="w-6/7 flex gap-x-4 sm:order-first sm:w-1/2">
        <img src="/featuredContent/content-1.png" alt=""  className="w-3/7"/>
        <img src="/featuredContent/content-2.png" alt="" className="w-4/7"/>
      </div>
    </section>
  );
}
