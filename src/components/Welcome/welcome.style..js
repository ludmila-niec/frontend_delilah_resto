import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#F9F6F0",
        minHeight: "100vh",
    },
    container: {
        margin: "6rem auto",
    },
    title: {
        fontSize: "2.5rem",
        margin: "2rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "3.2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4.5rem",
        },
    },
    subtitle: {
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.5rem",
        },
    },
    button: {
        marginBottom: "1.5rem",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "50%",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.2rem",
        },
    },
}));

export default useStyles;
