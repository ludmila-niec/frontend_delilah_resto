import React, { useEffect } from "react";
import OrderStatus from "../components/Order/OrderStatus";
import OrderDetail from "../components/Order/OrderDetail";
import Loading from "../components/common/Loading";

//redux
import { connect } from "react-redux";
import { loadOrders } from "../redux/actions/orderActions";

//material ui
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "8rem 3rem",
    [theme.breakpoints.up("md")]: {
      padding: "8rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10rem",
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: theme.typography.fontWeightBold,
    textTransform: "capitalize",
    color: "#214C8A",
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
    },
  },
}));

const Order = ({ order, loading, loadOrders }) => {
  const classes = useStyles();
  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Seguir mi pedido
        </Typography>
        {loading ? (
          <Loading />
        ) : (
          order && (
            <>
              <OrderStatus orderStatus={order.OrderStatus} />
              <OrderDetail order={order} />
            </>
          )
        )}
      </div>
    </main>
  );
};

function mapStateToProps(state, ownProps) {
  const orderId = ownProps.match.params.id;
  return {
    order:
      state.orders.orderList.length === 0
        ? null
        : state.orders.orderList.find((order) => order.order_id == orderId),
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
