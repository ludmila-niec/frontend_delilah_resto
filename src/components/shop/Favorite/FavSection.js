import React from "react";
import { Typography } from "@material-ui/core";
import FavGroup from "./FavGroup";

const FavSection = () => {
    return (
        <div style={{ margin: "2rem 0" }}>
            <Typography variant="h5" style={{ marginBottom: "1.3rem" }}>
                Mis favoritos
            </Typography>
            <FavGroup />
        </div>
    );
};

export default FavSection;
