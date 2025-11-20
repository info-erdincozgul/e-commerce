import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";
import { Route, Switch } from "react-router-dom";

export default function PageContent() {
  return (
    <>
      <Switch />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </>
  );
}
