import React, { useRef, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Lottie from "lottie-react";
import pizzaSpinner from "../../assets/lottie/lf30_editor_x8kqly4n.json";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    backgroundColor: "rgba(255,255,255,0.5)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textLoading: {
    margin: "1.5rem 0",
  },
}));

const Loading = () => {
  const classes = useStyles();
  const isMountedRef = useRef(false);
  const [stopped, setStopped] = useState(false);

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    isStopped: { stopped },
  };

  useEffect(() => {
    isMountedRef.current = true;
    setStopped(false);

    return () => {
      setStopped(true);
      isMountedRef.current = false;
    };
  }, []);

  return (
    <div className={classes.container}>
      <Lottie options={defaultOptions} animationData={pizzaSpinner} />
      <Typography color="primary" variant="h5" className={classes.textLoading}>
        Cargando...
      </Typography>
    </div>
  );
};

export default Loading;
