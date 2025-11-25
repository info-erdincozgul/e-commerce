import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShopPage from "../pages/ShopPage";
import { Route, Switch } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";

export default function PageContent() {
  return (
    <>
      <Switch />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/shop">
        <ShopPage />
      </Route>
      <Route path="/shop/:id">
        <ProductDetailPage />
      </Route>
      <Route path="/contact-us">
        <ContactPage />
      </Route>
      <Route path="/about-us">
        <AboutUsPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </>
  );
}
