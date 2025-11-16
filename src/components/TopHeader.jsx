import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

export default function TopHeader() {
  return (
    <div className="hidden sm:block bg-ebonyClay py-6">
      <div className="font-[Montserrat,sans-serif] flex justify-between text-white w-9/10 font-semibold my-0 mx-auto">
        <div className="flex gap-x-8">
          <span className="flex items-start gap-x-1">
            <Phone className="w-5 h-5" />
            (225) 555-0118
          </span>
          <span className="flex items-start gap-x-1">
            <Mail className="w-5 h-5" />
            michelle.rivera@example.com
          </span>
        </div>
        <span>Follow Us and get a chance to win 80% off</span>

        <span className="flex items-center gap-x-3">
          <span>Follow Us</span>
          <span>:</span>
          <Instagram className="hover:text-pictonBlue cursor-pointer"/>
          <Youtube className="hover:text-pictonBlue cursor-pointer"/>
          <Facebook className="hover:text-pictonBlue cursor-pointer"/>
          <Twitter className="hover:text-pictonBlue cursor-pointer"/>
        </span>
      </div>
    </div>
  );
}
