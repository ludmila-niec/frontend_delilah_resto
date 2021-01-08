import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";
import FavGroup from "./FavGroup";

const FavSection = ({ favorites }) => {
    return (
        <div style={{ margin: "2rem 0" }}>
            <Link component={RouterLink} to="/favs">
                <Typography variant="h5" style={{ marginBottom: "1.3rem" }}>
                    Mis favoritos
                </Typography>
            </Link>
            <FavGroup favorites={favorites} />
        </div>
    );
};

export default FavSection;
