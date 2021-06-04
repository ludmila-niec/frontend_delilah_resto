import React, { useEffect, useRef } from "react";
import OrderStatus from "../components/Order/OrderStatus";
import OrderSummary from "../components/Order/OrderSummary";
import Loading from "../components/common/Loading";
//redux
import { connect } from "react-redux";
import { loadOrderById } from "../redux/actions/orderActions";
// router
import { useParams } from "react-router-dom";
//material ui
import { Typography } from "@material-ui/core";
// style
import { useStyles } from "../components/Order/style/orderPage";

const Order = ({ orderSummary, loading, loadOrderById }) => {
  const classes = useStyles();
  const loadOrderByIdRef = useRef(() => {});
  // orderId => /orders/:id
  const { id } = useParams();

  loadOrderByIdRef.current = (id) => {
    loadOrderById(id);
  };

  useEffect(() => {
    loadOrderByIdRef.current(id);
  }, [id]);

  const orderLoaded = orderSummary && Object.keys(orderSummary).length > 0

  if (loading) return <Loading />;
  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.title}>
          Seguir mi pedido
        </Typography>
        {orderLoaded && (
          <div className={classes.wrapper}>
            <OrderStatus orderStatus={orderSummary.order.status_id} />
            <OrderSummary order={orderSummary} />
          </div>
        )}
      </div>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    orderSummary: state.orders.currentOrder,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadOrderById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
