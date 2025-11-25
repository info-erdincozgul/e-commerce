import { MapPin, Phone, Send } from "lucide-react";
export default function ContactInfo() {
  return (
    <section className="font-[Montserrat,sans-serif] w-8/10 flex flex-col mx-auto sm:gap-y-16">
      <div className="flex flex-col items-center text-center text-ebonyClay gap-y-4 sm:w-1/3 sm:mx-auto">
        <span className="text-sm font-semibold">VISIT OUR OFFICE</span>
        <span className="text-4xl font-bold">We help small businesses with big ideas</span>
      </div>
      <div className="sm:flex sm:mx-auto">
        <div className="flex flex-col items-center gap-y-4 text-center text-sm font-semibold text-ebonyClay py-20 sm:px-16">
        <Phone className="text-pictonBlue w-14 h-14" />
        <div className="flex flex-col">
          <span>georgia.young@example.com</span>
          <span>georgia.young@ple.com</span>
        </div>
        <span className="font-bold">Get Support</span>
        <button className="border-1 border-pictonBlue text-pictonBlue py-2 px-4 rounded-sm">
          Submit Request
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-center text-sm font-semibold text-white bg-ebonyClay py-20 sm:px-16">
        <MapPin className="text-pictonBlue w-14 h-14" />
        <div className="flex flex-col">
          <span>georgia.young@example.com</span>
          <span>georgia.young@ple.com</span>
        </div>
        <span className="font-bold">Get Support</span>
        <button className="border-1 border-pictonBlue text-pictonBlue py-2 px-4 rounded-sm">
          Submit Request
        </button>
      </div>
      <div className="flex flex-col items-center gap-y-4 text-center text-sm font-semibold text-ebonyClay py-20 sm:px-16">
        <Send className="text-pictonBlue w-14 h-14" />
        <div className="flex flex-col">
          <span>georgia.young@example.com</span>
          <span>georgia.young@ple.com</span>
        </div>
        <span className="font-bold">Get Support</span>
        <button className="border-1 border-pictonBlue text-pictonBlue py-2 px-4 rounded-sm">
          Submit Request
        </button>
      </div>
      </div>
    </section>
  );
}
