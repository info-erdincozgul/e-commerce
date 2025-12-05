import { Route, Redirect } from "react-router-dom";
import { useData } from "../hooks/useData";

const PrivateRoute = ({ children, ...rest }) => {
  let userData = useData("client");
  let user = userData?.user;
  let isLoggedIn = user && user.userInfo?.name && user.userInfo?.email;
  
  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
