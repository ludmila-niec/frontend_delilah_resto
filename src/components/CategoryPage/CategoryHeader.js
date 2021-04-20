import React from "react";
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { withRouter } from "react-router-dom";
// style
import { useStyles } from "./style/categoryHeader";

const CategoryCard = ({ name, history }) => {
  const classes = useStyles();

  const goBackRouter = () => {
    history.goBack();
  };
  return (
    <>
      <Card elevation={0} className={classes.cardContainer}>
        <IconButton className={classes.iconBtn} onClick={goBackRouter}>
          <ArrowBackIos color="primary" className={classes.icon} />
        </IconButton>
        <div className={classes.cardItem}>
          <CardContent>
            <Typography variant="h4" color="primary" className={classes.title}>
              {name}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default withRouter(CategoryCard);
