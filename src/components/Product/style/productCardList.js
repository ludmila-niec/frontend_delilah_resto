import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            gridAutoFlow: "dense",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            "& > div": {
                margin: 0,
            },
        },
    },
}));