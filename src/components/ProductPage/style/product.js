import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
        [theme.breakpoints.up("lg")]: {
            height: "65vh",
        },
    },
}));