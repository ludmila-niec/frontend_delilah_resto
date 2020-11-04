import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    IconButton,
    Button,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import saladImg from "../../../assets/ensalada.png";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 350,
        maxWidth: 250,
        padding: "1rem",
        margin: "1.5rem",
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
    },
    productImg: {
        height: "90%",
        width: "90%",
    },
}));

const FavItem = () => {
    const classes = useStyles();
    return (
        <div>
            <Card
                className={classes.root}
                elevation={0}
                style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
            >
                <CardHeader
                    action={
                        <IconButton className={classes.roundButton}>
                            <Favorite
                                color="secondary"
                                className={classes.iconFav}
                            />
                        </IconButton>
                    }
                    style={{ padding: "0.5rem" }}
                />
                <div className={classes.pictureBackground}>
                    <CardMedia
                        image={saladImg}
                        title="chicken salad"
                        className={classes.productImg}
                    />
                </div>
                <CardContent>
                    <Typography variant="body1" align="center">
                        Chicken Salad
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "0.2rem auto" }}
                    >
                        VER PRODUCTO
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default FavItem;
