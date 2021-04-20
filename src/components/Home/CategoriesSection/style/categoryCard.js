import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    skeleton: {
        height: "150px",
        width: "100%",
        marginBottom: "1.5rem",
    },
    cardContainer: {
        height: "150px",
        minWidth: "300px",
        padding: "1rem",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",

        "&:nth-child(3n + 1)": {
            backgroundColor: "#fde2df",
        },
        "&:nth-child(3n + 2)": {
            backgroundColor: "#f9f6f0",
        },
        "&:nth-child(3n + 3)": {
            backgroundColor: "#c6cbe7",
        },

        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(4),
            minWidth: "350px",
        },
    },
    foodImg: {
        height: "70px",
        width: "70px",
        transform: "rotateZ(-6.5deg)",
        marginLeft: "1rem",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    contentAction: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

