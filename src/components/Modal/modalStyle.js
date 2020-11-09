import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        "& > *": {
            margin: "1rem",
        },
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: 600,
        textAlign: "center",
    },
    textInfo: {
        textAlign: "center",
    },
    btnContainer: {
        width: "60%",
    },
    btn: {
        fontSize: "1rem",
        width: "100%",
        marginBottom: "1rem",
    },
}));

export default useStyles;
