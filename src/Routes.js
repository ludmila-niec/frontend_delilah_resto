import React from "react";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Favs from "./pages/Favs";
import Order from "./pages/Order";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/favs" component={Favs} />
                <Route exact path="/category/:name/:id" component={Category} />
                <Route exact path="/product/:id" component={Product} />
                <Route path="/checkout" component={Checkout} />
                <Route exact path="/order/:id" component={Order} />
            </Switch>
        </Router>
    );
};

export default Routes;

/*
/
/register
/login
/home
/favourites
/profile
/orders
/orders/:id
/category/:id
/search/:keyword
/product/:id
/checkout
*/
