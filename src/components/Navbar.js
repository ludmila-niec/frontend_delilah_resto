import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Badge,
} from "@material-ui/core";
import { Menu, LocalMall } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "1.5rem",
    },
    offset: theme.mixins.toolbar,
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.6rem 1rem",
    },
    menuIcon:{
        color:'#ffffff',
        fontSize: '30px',
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('sm')]:{
            height:'1.5rem',
            width:'1.5rem'
        }
    },
    icons:{
        display: 'flex',
        alignItems:'center'
    }

}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar>
            <Toolbar color="primary" className={classes.nav}>
                <Typography
                    variant="h1"
                    color="secondary"
                    className={classes.title}
                >
                    Delilah Resto
                </Typography>
                <div className={classes.icons}>
                    <Badge badgeContent={1} color="secondary">
                        <LocalMall />
                    </Badge>
                    <IconButton>
                        <Menu className={classes.menuIcon}  />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
