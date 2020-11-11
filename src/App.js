import React from "react";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Favs from "./pages/Favs";
import Order from "./pages/Order";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <Welcome /> */}
                {/* <Register /> */}
                {/* <Home /> */}
                {/* <Favs /> */}
                {/* <Category /> */}
                {/* <Product /> */}
                {/* <Checkout /> */}
                <Order />
            </ThemeProvider>
        </div>
    );
}

//route '/' => componente welcome
// route'/register => componente Form => register
// route'/login => componente Form => login

export default App;
