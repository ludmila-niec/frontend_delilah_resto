import React, { useEffect, useRef } from "react";
import OrderStatus from "../components/Order/OrderStatus";
import OrderSummary from "../components/Order/OrderSummary";
import Loading from "../components/common/Loading";
//redux
import { connect } from "react-redux";
import { loadOrders } from "../redux/actions/orderActions";
//material ui
import { Typography } from "@material-ui/core";
// style
import { useStyles } from "../components/Order/style/orderPage";

const Order = ({ order, loading, loadOrders }) => {
  const classes = useStyles();
  const loadOrdersRef = useRef(() => {});

  loadOrdersRef.current = () => {
    loadOrders();
  };
  useEffect(() => {
    loadOrdersRef.current();
  }, []);

  if (loading) return <Loading />;
  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Seguir mi pedido
        </Typography>
        {order && (
          <div className={classes.wrapper}>
            <OrderStatus orderStatus={order.OrderStatus} />
            <OrderSummary order={order} />
          </div>
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
        : // eslint-disable-next-line
          state.orders.orderList.find((order) => order.order_id == orderId),
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
