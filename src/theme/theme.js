import { createMuiTheme } from "@material-ui/core/styles";

//  const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: "#516DB4",
//         },
//         primaryLighter: {
//             main: "#C6CBE7",
//         },
//         secondary: {
//             main: "#F69DA1",
//         },
//         secondaryLighter: {
//             main: "#FDE2DF",
//         },
//     },
//     typography:{
//         fontFamily:'"Poppins","Arial","sans-serif"',
//         h1:{
//             fontFamily:"Pacifico"
//         }

//     }
// });
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
    },

    typography: {
        // fontFamily: ["Pacifico", "sans-serif"],
        fontFamily: ["Poppins", "sans-serif"],
        h1: {
            fontFamily: ["Pacifico", "cursive"],
            // letterSpacing:'0.2rem'
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
