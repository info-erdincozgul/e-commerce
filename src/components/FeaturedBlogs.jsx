import BlogCard from "./BlogCard";
import BlogCardDesktop from "./BlogCardDesktop";

export default function FeaturedBlogs() {
  return (
    <section className="my-4 flex flex-col items-center font-[Montserrat,sans-serif] gap-y-4">
      <div className="flex flex-col items-center my-16">
        <span className="text-sm text-pictonBlue font-bold">
          Practice Advice
        </span>
        <span className="text-4xl text-ebonyClay font-bold">
          Featured Posts
        </span>
      </div>
      <div className="sm:hidden flex flex-col items-center">
        <BlogCard index="1" />
        <span class="w-3/4 h-1 bg-doveGray rounded-full opacity-10 my-4"></span>
        <BlogCard index="2" />
      </div>
      <div className="sm:flex w-4/6 gap-x-4 hidden ">
        <BlogCardDesktop index="1" />
        <BlogCardDesktop index="2" />
      </div>
    </section>
  );
}
