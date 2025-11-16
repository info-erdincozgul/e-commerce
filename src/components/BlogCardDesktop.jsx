import {
  AlarmClock,
  ChartArea,
  ChartLine,
  ChevronRight,
  Download,
  Eye,
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

export default function BlogCardDesktop({ index }) {
  let imgUrl = `/blog/post-${index}b.png`;
  return (
    <div className="w-1/2 flex gap-x-8">
      <div className="w-2/6 relative">
        <img src={imgUrl} alt="" />
        <button className="absolute top-4 left-4 bg-cinnabar py-1 px-2 rounded-sm text-white text-sm">
          Sale
        </button>
        <Heart className="absolute bottom-10 left-10 text-ebonyClay bg-white p-2 rounded-full w-9 h-9 hover:bg-ebonyClay hover:text-white cursor-pointer" />
        <ShoppingCart className="absolute bottom-10 left-22 text-ebonyClay bg-white p-2 rounded-full w-9 h-9 hover:bg-ebonyClay hover:text-white cursor-pointer" />
        <Eye className="absolute bottom-10 left-34 text-ebonyClay bg-white p-2 rounded-full w-9 h-9 hover:bg-ebonyClay hover:text-white cursor-pointer" />
      </div>
      <div className="w-3/6 py-8 flex flex-col gap-y-4">
        <div className="flex justify-between">
          <span className="text-pictonBlue font-semibold">
            English Department
          </span>
          <div className="flex gap-x-1 bg-ebonyClay rounded-full px-2 items-center">
            <Star className="text-sunglow w-4" />
            <span className="text-sm text-white">4.9</span>
          </div>
        </div>
        <span className="text-ebonyClay font-bold">Graphic Design</span>
        <span className="text-doveGray font-semibold">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </span>
        <div className="flex items-center text-doveGray">
          <Download className="w-6 h-4" />
          <span className="font-bold">15 Sales</span>
        </div>
        <div className="flex gap-x-2">
          <span className="text-silver font-semibold">$16.48 </span>
          <span className="text-eucalyptus font-bold">$6.48</span>
        </div>
        <div className="flex gap-x-1">
          <div className="w-4 h-4 rounded-full bg-pictonBlue cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-eucalyptus cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-burnSienna cursor-pointer"></div>
          <div className="w-4 h-4 rounded-full bg-ebonyClay cursor-pointer"></div>
        </div>
        <div className="text-sm flex gap-x-4 text-doveGray font-medium">
          <div className="flex items-center gap-x-1">
            <AlarmClock className="w-4 text-pictonBlue" />
            <span>22h...</span>
          </div>
          <div className="flex items-center gap-x-1">
            <ChartLine className="w-4 text-burnSienna" />
            <span>64 Lessons</span>
          </div>
          <div className="flex items-center gap-x-1">
            <ChartArea className="w-4 text-eucalyptus" />
            <span>Progress</span>
          </div>
        </div>
        <div className="flex items-center w-1/2 text-pictonBlue border-1 rounded-full border-pictonBlue justify-center py-2 hover:bg-pictonBlue hover:text-white cursor-pointer">
          <span className="text-sm font-bold ">Learn More</span>
          <ChevronRight className="w-6 h-6 hover:text-white" />
        </div>
      </div>
    </div>
  );
}
