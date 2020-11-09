import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    ButtonGroup,
    Button,
    IconButton,
} from "@material-ui/core";
import { Remove, Add, Clear } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import saladImg from "../../assets/ensalada.png";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: 350,
        padding: "1rem",
        margin: "1rem 0",
        boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
        height: "95%",
        width: "95%",
    },
    cardContent: {
        height: "150px",
        width: "160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1.2rem",
    },
    btn: {
        padding: "5px",
    },
    icon: {
        fontSize: "0.8rem",
    },
    btnDelete: {
        position: "absolute",
        top: 0,
        right: 0,
    },
}));

const CardItem = () => {
    const classes = useStyles();
    return (
        <div>
            <Card
                className={classes.container}
                elevation={0}
                style={{ boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)" }}
            >
                <div className={classes.background}>
                    <CardMedia
                        image={saladImg}
                        title="salad"
                        className={classes.productImg}
                    />
                </div>
                <CardContent className={classes.cardContent}>
                    <div>
                        <Typography>Chicken Salad</Typography>
                        <Typography>$390</Typography>
                    </div>
                    <ButtonGroup
                        color="primary"
                        aria-label="button select quantity"
                    >
                        <Button className={classes.btn}>
                            <Remove className={classes.icon} />
                        </Button>
                        <Button className={classes.btn}>1</Button>
                        <Button className={classes.btn}>
                            <Add className={classes.icon} />
                        </Button>
                    </ButtonGroup>
                </CardContent>
                <IconButton className={classes.btnDelete}>
                    <Clear color="error" />
                </IconButton>
            </Card>
        </div>
    );
};

export default CardItem;
