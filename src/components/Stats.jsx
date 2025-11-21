export default function Stats() {
  return (
    <div className="font-[Montserrat,sans-serif] flex flex-col items-center text-center my-36 gap-y-24 sm:flex-row sm:w-7/10 sm:mx-auto sm:justify-between">
      <div className="flex flex-col gap-y-2">
        <span className="text-5xl text-ebonyClay font-bold">15K</span>
        <span className="text-doveGray font-semibold">Happy Customers</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-5xl text-ebonyClay font-bold">150K</span>
        <span className="text-doveGray font-semibold">Monthly Visitors</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-5xl text-ebonyClay font-bold">15</span>
        <span className="text-doveGray font-semibold">Countries Worldwide</span>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-5xl text-ebonyClay font-bold">100+</span>
        <span className="text-doveGray font-semibold">Top Partners</span>
      </div>
    </div>
  );
}
