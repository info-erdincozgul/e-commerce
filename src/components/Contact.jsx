import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
export default function Contact() {
  return (
    <div className="flex flex-col items-center w-7/10 mx-auto gap-y-8 font-[Montserrat,sans-serif] text-center my-40 sm:w-1/3">
      <span className="font-bold text-4xl text-ebonyClay">Get answers to all your questions.</span>
      <span className="font-medium text-xl text-doveGray">
        Problems trying to resolve the conflict between the major realms of
        Classical physics:
      </span>
      <button className="py-4 px-8 border border-pictonBlue rounded-sm bg-pictonBlue text-white font-medium">CONTACT OUR COMPANY</button>
      <div className="flex text-silver justify-around w-9/10 sm:w-1/3">
        <Twitter />
        <Facebook />
        <Instagram />
        <Linkedin />
      </div>
    </div>
  );
}
