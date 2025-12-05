export default function AboutUs() {
  return (
    <section className="my-12 sm:flex sm:flex-col sm:gap-y-12">
      <div className="flex flex-col text-center font-[Montserrat,sans-serif] items-center sm:flex-row sm:w-7/10 sm:mx-auto">
        <div className="flex flex-col w-5/9 gap-y-4 items-center sm:w-1/2 sm:items-start sm:gap-y-12">
          <span className="hidden sm:inline sm:font-bold">ABOUT COMPANY</span>
          <span className="text-3xl font-bold text-ebonyClay sm:text-5xl">ABOUT US</span>
          <span className="text-doveGray font-medium sm:w-1/2 sm:text-start">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </span>
          <button className="rounded-sm py-3 px-6 text-white bg-pictonBlue text-sm">
            Get Quote Now
          </button>
        </div>
        <img
          src="/hero/about-us-hero.png"
          alt="About Us Hero Image"
          className="w-9/10 my-24 sm:w-1/2 sm:my-0"
        />
      </div>
      <div className="flex flex-col w-7/10 mx-auto items-center gap-y-4 sm:items-start">
        <span className="text-cinnabar text-xs">Challenges we face</span>
        <div className="flex flex-col gap-y-12 sm:flex-row sm:gap-x-12">
          <span className="text-2xl font-bold text-ebonyClay text-center sm:w-1/3 sm:text-start">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </span>
          <span className="text-sm text-medium text-doveGray sm:w-1/2">
            The challenge of resolving the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </span>
        </div>
      </div>
    </section>
  );
}