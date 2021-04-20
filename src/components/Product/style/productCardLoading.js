import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    container: {
        padding: "1rem",
        margin: "1.5rem 0",
        boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
        position: "relative",
        height: "220px",
        display: "flex",
        alignItems: "center",
    },
    content: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    skeletonImg: {
        width: "150px",
        height: "150px",
    },
    skeletonData: {
        alignSelf: "flex-start",
        width: "50%",
        padding: "1rem",
    },
    skeletonText: {
        width: "80%",
        borderRadius: 0,
    },
}));