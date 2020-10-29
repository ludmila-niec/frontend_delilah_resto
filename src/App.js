import React from "react";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Home from "./screens/Home";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
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
