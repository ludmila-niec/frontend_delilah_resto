import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#516DB4",
        },
        primaryLighter: {
            main: "#C6CBE7",
        },

        secondary: {
            main: "#F69DA1",
        },
        secondaryLighter: {
            main: "#FDE2DF",
        },
        error: {
            main: "#E2607F",
        },
    },

    typography: {
        fontFamily: ["Poppins", "sans-serif"],
        h1: {
            fontFamily: ["Pacifico", "cursive"],
        },
        h2: {
            fontFamily: ["Poppins", "sans-serif"],
            fontSize: "1.5rem",
        },
        h3: {
            fontFamily: ["Pacifico", "cursive"],
            fontSize: "1.2rem",
        },
        h4: {
            fontFamily: ["Pacifico", "cursive"],
            fontSize: "1.5rem",
        },
    },
    shape: {
        borderRadius: 10,
    },
    myShadow: {
        cardShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
    },
});
