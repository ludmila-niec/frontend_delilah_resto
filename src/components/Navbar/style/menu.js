import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    container: {
      width: "300px",
    },
    header: {
      height: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      backgroundColor: "#f1f1f1",
  
      "& > h5": {
        margin: "1.5rem 0",
        textTransform: "capitalize",
      },
    },
  
    bodyContainer: {
      padding: "1rem",
    },
    listStyle: {
      marginTop: "2rem",
    },
    brand: {
      margin: "2rem auto",
      position: "absolute",
      bottom: 0,
      right: "50%",
      transform: "translateX(50%)",
    },
  }));