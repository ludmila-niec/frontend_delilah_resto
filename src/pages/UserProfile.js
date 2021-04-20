import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "90vh",
    padding: "8rem 2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "8rem 4rem",
    },
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" color="primary">
          Coming soon...
        </Typography>
      </div>
    </main>
  );
};

export default UserProfile;
