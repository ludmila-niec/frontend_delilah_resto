import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1rem",
        margin: "1.5rem 0",
        boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
        position: "relative",
        height: "220px",
        display: "flex",
        alignItems: "center",
    },
    linkCard: {
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    background: {
        height: "150px",
        width: "150px",
        borderRadius: theme.shape.borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.secondaryLighter.main,
    },
    productImg: {
        height: "85%",
        width: "85%",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    productData: {
        alignSelf: "flex-start",
    },
    productTitle: {
        fontWeight: 500,
        textTransform: "capitalize",
        maxWidth: "130px",
        fontSize: "0.9rem",
    },
    productDescription: {
        maxWidth: "100px",
        fontSize: "0.7rem",
        overflow: "hidden",
        maxHeight: "90px",
        color: theme.palette.text.primary,
    },
    icon: {
        position: "absolute",
        right: "10px",
        bottom: "10px",
        padding: 0,
    },
}));

export default useStyles;
