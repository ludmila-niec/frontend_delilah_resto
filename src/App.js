import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import Routes from "./Routes";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes />
            </ThemeProvider>
        </div>
    );
}

//route '/' => componente welcome
// route'/register => componente Form => register
// route'/login => componente Form => login

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

export default App;
