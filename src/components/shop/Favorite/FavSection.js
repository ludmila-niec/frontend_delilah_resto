import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";
import FavGroup from "./FavGroup";

const FavSection = () => {
    return (
        <div style={{ margin: "2rem 0" }}>
            <Link component={RouterLink} to="/favs">
                <Typography variant="h5" style={{ marginBottom: "1.3rem" }}>
                    Mis favoritos
                </Typography>
            </Link>
            <FavGroup />
        </div>
    );
};

export default FavSection;
