export default function TopProducts() {
  return (
    <>
      <section className="w-8/10 mx-auto my-8 font-[Montserrat,sans-serif] flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 ">
        <div className="relative sm:w-1/2 ">
          <img src="topProducts/top-product-1.png" className="sm:hidden" />
          <img
            src="topProducts/top-product-1b.png"
            className="hidden sm:flex sm:w-full h-full"
          />
          <div className="absolute bg-pictonBlue h-3/7 w-full top-76 opacity-50 pt-18 pl-10 flex flex-col items-start text-white sm:w-4/6 sm:top-106 sm:h-4/9"></div>
          <div className="absolute top-76 pt-18 pl-10 flex flex-col items-start text-white gap-y-4 sm:top-106 sm:pl-20 sm:pt-26">
            <span className="text-xl font-bold w-2/3 sm:text-3xl">
              Top Product Of the Week
            </span>
            <button className="border-1 border-solid rounded py-2 px-6 text-sm font-semibold sm:text-base sm:py-4 sm:px-10 hover:bg-white hover:text-pictonBlue cursor-pointer">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 sm:w-1/2 ">
          <div className="relative">
            <img src="topProducts/top-product-2.png" className="sm:hidden" />
            <img
              src="topProducts/top-product-2b.png"
              className="hidden sm:flex sm:w-full "
            />
            <div className="absolute bg-pictonBlue h-3/5 w-full top-38 opacity-50 pt-18 pl-10 flex flex-col items-start text-white sm:w-4/7 sm:top-32 sm:h-4/6"></div>
            <div className="absolute top-38 pt-18 pl-10 flex flex-col items-start text-white gap-y-4 sm:top-32 sm:pl-20 sm:pt-20 sm:w-full sm:gap-y-8">
              <span className="text-xl font-semibold w-2/3">
                Top Product Of the Week
              </span>
              <button className="border-1 border-solid rounded py-2 px-6 text-sm font-semibold sm:py-4 sm:px-10 hover:bg-white hover:text-pictonBlue cursor-pointer">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="topProducts/top-product-3.png" className="sm:hidden" />
            <img
              src="topProducts/top-product-3b.png"
              className="hidden sm:flex sm:w-full"
            />
            <div className="absolute bg-pictonBlue h-3/5 w-full top-38 opacity-50 pt-18 pl-10 flex flex-col items-start text-white sm:w-4/7 sm:top-30 sm:h-4/6"></div>
            <div className="absolute top-38 pt-18 pl-10 flex flex-col items-start text-white gap-y-4 sm:top-30 sm:pl-20 sm:pt-20 sm:w-full sm:gap-y-8">
              <span className="text-xl font-semibold w-2/3">
                Top Product Of the Week
              </span>
              <button className="border-1 border-solid rounded py-2 px-6 text-sm font-semibold sm:py-4 sm:px-10 hover:bg-white hover:text-pictonBlue cursor-pointer">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
