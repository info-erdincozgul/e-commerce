import AboutUsPage from "../pages/AboutUsPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShopPage from "../pages/ShopPage";
import { Route, Switch } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import PrivateRoute from "../components/PrivateRoute";
import OrderPage from "../pages/OrderPage";

export default function PageContent() {
  return (
    <>
      <Switch />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/shop/:gender/:categoryName/:categoryId">
        <ShopPage />
      </Route>
      <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
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
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/shopping-cart">
        <ShoppingCartPage />
      </Route>
      <PrivateRoute path="/orders">
        <OrderPage />
      </PrivateRoute>
    </>
  );
}
