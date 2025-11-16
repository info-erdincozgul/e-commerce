import { AlarmClock, ChartArea, ChevronRight } from "lucide-react";

export default function BlogCard({ index }) {
  let imgUrl = `/blog/post-${index}.png`;
  return (
    <div className="w-3/4 flex flex-col gap-y-4">
      <div className="relative">
        <img src={imgUrl} alt="" />
        <button className="absolute top-4 left-4 bg-cinnabar px-2 py-1 text-white text-xs rounded-xs">
          NEW
        </button>
      </div>
      <div className="flex flex-col gap-y-4 w-6/7 mx-auto">
        <div className="flex gap-x-4 text-sm font-medium">
          <span className="text-pictonBlue">Google</span>
          <span className="text-doveGray">Trending</span>
          <span className="text-doveGray">New</span>
        </div>
        <span className="text-ebonyClay text-xl font-semibold">
          Loudest â la Madison #1 (L'integral)
        </span>
        <span className="text-doveGray font-medium">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </span>
        <div className="text-sm flex justify-between">
          <div className="flex gap-x-1 items-center">
            <AlarmClock className="w-4 h-4 text-pictonBlue" />
            <span>22 April 2021</span>
          </div>
          <div className="flex gap-x-1 items-center">
            <ChartArea className="w-4 h-4 text-eucalyptus" />
            <span>10 comments</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-doveGray font-bold">Learn More</span>
          <ChevronRight className="text-pictonBlue w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
