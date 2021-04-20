import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem",
    },
    textInfo: {
        fontSize: "1.5rem",
        fontWeight: theme.typography.fontWeightMedium,
        textAlign: "center",
    },
    btn: {
        fontSize: "1rem",
    },
}));