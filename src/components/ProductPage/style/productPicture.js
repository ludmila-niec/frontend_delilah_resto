import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        minHeight: "50vh",
        backgroundColor: theme.palette.secondaryLighter.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "7rem",
        position: "relative",
        [theme.breakpoints.up("md")]: {
            paddingTop: 0,
            flex: 1,
            minHeight: "fit-content",
            borderRadius: "10px 0 0 10px"
        },
        [theme.breakpoints.up("lg")]: {
            minHeight: "50vh",
        },
    },
    img: {
        height: "65%",
        width: "65%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        margin: "2rem",
    },
    favBtn: {
        position: "absolute",
        right: "20px",
        top: "100px",
        [theme.breakpoints.up("md")]: {
            top: "25px",
        },
    },
    backBtn: {
        position: "absolute",
        left: "20px",
        top: "100px",
        [theme.breakpoints.up("md")]: {
            top: "25px",
        },
    },
    icon: {
        fontSize: "2.5rem",
    },
    skeleton: {
        height: "50vh",
        width: "100%",
    },
}));