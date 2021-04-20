import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRouteAdmin({ isAuth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.user && isAuth.user.isAdmin) {
          return <Component {...props} />;
        } else {
          return <Redirect to={{ pathname: "/login" }} />;
        }
      }}
    />
  );
}

export default ProtectedRouteAdmin;
