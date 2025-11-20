import Clients from "../components/Clients";
import ShopContent from "../components/ShopContent";
import ShopNav from "../components/ShopNav";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Shop() {
  return (
    <>
      <ShopNav />
      <ShopContent />
      <Clients />
    </>
  );
}
