import React, { useEffect, useRef } from "react";
import AdminOrders from "../components/Admin/Orders/AdminOrders";
import Loading from "../components/common/Loading";
import { Typography } from "@material-ui/core";
import {useStyles} from '../components/Admin/styles/adminPage'
// redux
import { connect } from "react-redux";
import { loadOrders, updateOrderStatus } from "../redux/actions/orderActions";

const AdminDashboard = ({ loading, orders, loadOrders, updateOrderStatus }) => {
  const classes = useStyles();
  const loadOrdersRef = useRef(() => {});

  loadOrdersRef.current = () => {
    loadOrders();
  };

  useEffect(() => {
    if (orders.length === 0) {
      loadOrdersRef.current();
    }
  }, [orders.length]);

  if (loading) return <Loading />;
  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.container__title}>
          Panel de administrador
        </Typography>
        <AdminOrders orders={orders} onUpdateOrderStatus={updateOrderStatus} />
      </div>
    </main>
  );
};

function mapStateToProps(state) {
  return {
    orders: state.orders.orderList,
    loading: state.apiCallsInProgress > 0,
  };
}
const mapDispatchToProps = {
  loadOrders,
  updateOrderStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
