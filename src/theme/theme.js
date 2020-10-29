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
    },
    shape: {
        borderRadius: 10,
    },
});
