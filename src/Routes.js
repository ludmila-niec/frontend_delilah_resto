import React from "react";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Search from './pages/Search'
import Checkout from "./pages/Checkout";
import Favs from "./pages/Favs";
import Order from "./pages/Order";
import Orders from "./pages/Orders";
import ProtectedRoute from "./ProtectedRoute";
import { connect } from "react-redux";

import { Route, Switch } from "react-router-dom";

const Routes = ({ isAuth }) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/home" isAuth={isAuth} component={Home} />
      <ProtectedRoute path="/favs" isAuth={isAuth} component={Favs} />
      <ProtectedRoute
        exact
        path="/category/:name/:id"
        isAuth={isAuth}
        component={Category}
      />
      <ProtectedRoute
        exact
        path="/product/:id"
        isAuth={isAuth}
        component={Product}
      />
      <ProtectedRoute
        exact
        path="/search"
        isAuth={isAuth}
        component={Search}
      />
      <ProtectedRoute path="/checkout" isAuth={isAuth} component={Checkout} />
      <ProtectedRoute path="/orders" isAuth={isAuth} component={Orders} />
      <ProtectedRoute
        exact
        path="/order/:id"
        isAuth={isAuth}
        component={Order}
      />
    </Switch>
  );
};

function mapStateToProps(state) {
  return { isAuth: state.userLogin.token };
}

export default connect(mapStateToProps, null)(Routes);
