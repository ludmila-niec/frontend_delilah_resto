import React from "react";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Home from "./pages/Home";
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
                <Home />
            </ThemeProvider>
        </div>
    );
}

//route '/' => componente welcome
// route'/register => componente Form => register
// route'/login => componente Form => login

export default App;
