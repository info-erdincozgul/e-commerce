import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
export default function ContactHero() {
  return (
    <section className="text-center flex flex-col font-[Montserrat,sans-serif] text-ebonyClay my-12 gap-y-8 sm:flex-row sm:w-7/10 sm:mx-auto">
      <div className="flex flex-col items-center w-4/7 mx-auto gap-y-8 sm:w-1/2 sm:items-start sm:text-start sm:justify-around sm:py-40">
        <span className="text-sm font-bold">CONTACT US</span>
        <span className="text-3xl font-bold sm:text-6xl sm:w-2/3">Get in touch today!</span>
        <span className="text-doveGray font-semibold sm:w-2/3">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </span>
        <span className="text-xl font-bold">Phone ; +451 215 215</span>
        <span className="text-xl font-bold">Fax ; +451 215 215</span>
        <div className="flex gap-x-4">
          <Instagram />
          <Twitter />
          <Facebook />
          <Linkedin />
        </div>
      </div>
      <img src="/hero/contact-hero.png" alt="" className="w-8/10 mx-auto sm:w-1/2"/>
    </section>
  );
}
