import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 350,
    padding: "1rem",
    margin: "1rem 0",
    boxShadow: '"0px 4px 11px 4px rgba(0, 0, 0, 0.1)',
  },
  productData: {
    height: "120px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  background: {
    height: "100px",
    width: "100px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.secondaryLighter.main,
  },
  productImg: {
    height: "80%",
    width: "80%",
  },
  cardContent: {
    paddingLeft: "1rem",
  },
  contentFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    margin: ".5rem 0",
  },
  btn: {
    padding: "5px",
  },
  icon: {
    fontSize: "0.8rem",
  },
  iconDelete: {
    fontSize: "1.5rem",
  },
  btnDelete: {
    padding: 0,
  },
  btnActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));