export default function Features() {
  return (
    <section className="flex flex-col items-center gap-y-20 my-36 text-center sm:w-auto font-[Montserrat,sans-serif]">
      <div className="w-2/3 flex flex-col gap-y-4">
        <span className="text-doveGray text-xl font-semibold">
          Featured Products
        </span>
        <span className="text-ebonyClay text-2xl font-bold">
          THE BEST SERVICES
        </span>
        <span className="text-doveGray font-semibold">
          Problems trying to resolve the conflict between
        </span>
      </div>
      <div className="w-1/2 flex flex-col gap-y-20 sm:flex-row sm:w-6/10 sm:gap-x-36">
        <div className="flex flex-col items-center gap-y-4 sm:w-1/3">
          <img src="/features/features-icon-1.png" alt="" className="w-1/3" />
          <span className="text-ebonyClay text-2xl font-bold">Easy Wins</span>
          <span className="text-doveGray font-medium">
            Get your best looking smile now!
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-4 sm:w-1/3">
          <img src="/features/features-icon-2.png" alt="" className="w-1/3" />
          <span className="text-ebonyClay text-2xl font-bold">Concrete</span>
          <span className="text-doveGray font-medium">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-4 sm:w-1/3">
          <img src="/features/features-icon-3.png" alt="" className="w-1/3" />
          <span className="text-ebonyClay text-2xl font-bold">Hack Growth</span>
          <span className="text-doveGray font-medium">
            Overcame any hurdle or any other problem.
          </span>
        </div>
      </div>
    </section>
  );
}
