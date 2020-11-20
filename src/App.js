import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import Routes from "./Routes";
import { Provider } from "react-redux";
import store from "./store";
function App() {
    return (
        <div>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes />
                </ThemeProvider>
            </Provider>
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
