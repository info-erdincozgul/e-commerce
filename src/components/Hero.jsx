export default function Hero() {
  return (
    <section className="sm:w-9/10 sm:mx-auto font-[Montserrat,sans-serif]">
      <div className="bg-gradient-to-r from-cyan-300 to-green-100 mx-4 my-4 rounded-3xl sm:w-[95%] sm:flex">
        <div className="flex flex-col items-center text-center py-16 gap-y-8 w-4/6 mx-auto sm:w-2/3 sm:items-start sm:py-36 sm:px-40 sm:text-start">
          <span className="text-mariner text-sm font-bold sm:text-base">SUMMER 2020</span>
          <span className="text-ebonyClay text-4xl font-bold sm:text-7xl">
            NEW COLLECTION
          </span>
          <span className="text-doveGray font-semibold text-lg sm:text-2xl sm:font-medium sm:w-2/3">
            We know how large objects will act, but things on a small scale.
          </span>
          <button className="bg-pictonBlue text-white text-2xl font-bold px-8 py-4 rounded-md hover:bg-white hover:text-pictonBlue cursor-pointer">
            SHOP NOW
          </button>
        </div>
        <div className="w-full h-70 relative overflow-hidden sm:h-auto sm:w-1/2 sm:overflow-visible sm:left-25 sm:overflow-y-hidden">
          <img
            src="/hero/hero-cover1.png"
            className="absolute right-5 "
          ></img>
        </div>
      </div>
    </section>
  );
}
