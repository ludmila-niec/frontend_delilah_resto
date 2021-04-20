import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    skeletonImg: {
        height: "60vh",
        width: "100%",
    },
    containerData: {
        minHeight: "300px",
        borderRadius: "10px 10px 0 0 ",
        transform: "translateY(-15px)",
        backgroundColor: "#ffffff",
        padding: "2rem",
    },
    skeletonTitle: {
        borderRadius: 0,
        fontSize: "2.2rem",
        marginBottom: "2rem",
    },
    skeletonText: {
        width: "80%",
        borderRadius: 0,
    },
}));