export default function TopProducts() {
  return (
    <>
      <section className="w-8/10 mx-auto my-8 font-[Montserrat,sans-serif] flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 ">
        <div className="relative sm:w-1/2">
          <img
            src="topProducts/top-product-1.png"
            className="sm:hidden w-full h-full"
          />
          <img
            src="topProducts/top-product-1b.png"
            className="hidden sm:block sm:w-full h-full"
          />
          <div className="absolute bg-pictonBlue h-2/5 w-full top-4/5 -translate-y-1/2 opacity-50 flex flex-col items-start text-white sm:w-4/5 sm:top-4/5 sm:-translate-y-1/2 sm:h-2/5"></div>
          <div className="absolute top-4/5 -translate-y-1/2 left-10 flex flex-col items-start text-white gap-y-4 sm:left-20 sm:gap-y-8 sm:w-full">
            <span className="text-xl font-bold w-2/5 sm:text-2xl">
              Top Product Of the Week
            </span>
            <button className="border-1 border-solid rounded py-2 px-6 text-sm font-semibold sm:text-base sm:py-4 sm:px-10 hover:bg-white hover:text-pictonBlue cursor-pointer">
              EXPLORE ITEMS
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 sm:w-1/2 ">
          <div className="relative">
            <img
              src="topProducts/top-product-2.png"
              className="sm:hidden w-full h-full"
            />
            <img
              src="topProducts/top-product-2b.png"
              className="hidden sm:flex sm:w-full h-full "
            />
            <div className="absolute bg-pictonBlue h-3/5 w-full top-38 opacity-50 pt-18 pl-10 flex flex-col items-start text-white sm:w-3/5 sm:top-4/6 sm:-translate-y-1/2 sm:h-4/6"></div>
            <div className="absolute top-38 pt-18 pl-10 flex flex-col items-start text-white gap-y-4 sm:top-2/7 sm:pl-20 sm:pt-20 sm:w-4/5 sm:gap-y-8">
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
            <div className="absolute bg-pictonBlue h-3/5 w-full top-38 opacity-50 pt-18 pl-10 flex flex-col items-start text-white sm:w-3/5 sm:top-4/6 sm:-translate-y-1/2 sm:h-4/6"></div>
            <div className="absolute top-38 pt-18 pl-10 flex flex-col items-start text-white gap-y-4 sm:top-2/7 sm:pl-20 sm:pt-20 sm:w-4/5 sm:gap-y-8">
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
