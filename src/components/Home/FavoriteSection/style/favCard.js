import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 350,
        padding: "1rem",
        margin: "1.5rem",

        [theme.breakpoints.up("sm")]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "200px",
        },
    },
    title: {
        textAlign: "center",
        textTransform: "capitalize",
    },
    iconFav: {
        fontSize: "1.3rem",
    },
    roundButton: {
        border: `1.5px solid ${theme.palette.secondary.main}`,
        marginBottom: "0.5rem",
        padding: "8px",
    },
    pictureBackground: {
        backgroundColor: theme.palette.secondaryLighter.main,
        height: "220px",
        width: "220px",
        borderRadius: theme.shape.borderRadius,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [theme.breakpoints.up("sm")]: {
            height: "150px",
            width: "150px",
            margin: 0,
        },
    },
    productImg: {
        height: "90%",
        width: "90%",
    },
}));