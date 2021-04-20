import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    slide: {
        [theme.breakpoints.up("sm")]: {
            width: "300px",
        },
        backgroundColor: "blue",
    },
    [theme.breakpoints.up("md")]: {
        width: "300px",
    },
    arrowStyles: {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
    },
    indicatorStyles: {
        background: "#fff",
        width: 8,
        height: 8,
        display: "inline-block",
        margin: "0 8px",
    },

    carouselContainer: {
        width: "300px",
        [theme.breakpoints.up("sm")]: {
            width: "425px",
        },
    },
}));