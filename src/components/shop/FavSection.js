import React from "react";
import { Typography } from "@material-ui/core";
import FavGroup from "./FavGroup";

const FavSection = () => {
    return (
        <div style={{ margin: "2rem auto" }}>
            <Typography variant="h5" style={{ marginBottom: "1.3rem" }}>
                Favoritos
            </Typography>
            <FavGroup />
        </div>
    );
};

export default FavSection;
