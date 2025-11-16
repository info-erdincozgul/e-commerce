import Clients from "../components/Clients";
import FeaturedBlogs from "../components/FeaturedBlogs";
import FeaturedContent from "../components/FeaturedContent";
import FeaturedProducts from "../components/FeaturedProducts";
import Features from "../components/Features";
import Hero from "../components/Hero";
import TopProducts from "../components/TopProducts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <TopProducts />
      <FeaturedProducts />
      <FeaturedContent />
      <Features />
      <FeaturedBlogs />
    </>
  );
}
