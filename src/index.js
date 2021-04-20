import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import ErrorBoundary from "./components/common/Error/ErrorBoundary";
const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <ScrollToTop />
                <CssBaseline />
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </Router>
        </ThemeProvider>
    </ReduxProvider>,

    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
