import React, { useEffect, useRef } from "react";
import EmptyOrders from "../components/OrdersHistory/EmptyOrders";
import OrderInfoList from "../components/OrdersHistory/OrderInfoList";
import Loading from "../components/common/Loading";
//redux
import { connect } from "react-redux";
import { loadOrders } from "../redux/actions/orderActions";
//material ui
import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
// styles
import { useStyles } from "../components/OrdersHistory/style/ordersPage";
// custom hook
import usePagination from "../Hooks/usePagination";

const Orders = ({ orders, loading, loadOrders }) => {
  const classes = useStyles();
  const loadOrdersRef = useRef(() => {});
  const recentOrders = [...orders].reverse();
  const {currentOrders, currentPage, pagesNumber, handlePagination} = usePagination(recentOrders, 6)

  loadOrdersRef.current = () => {
    loadOrders();
  };

  useEffect(() => {
    loadOrdersRef.current();
  }, []);

  const userHaveOrders = orders.length > 0;

  if (loading) return <Loading />;

  return (
    <main>
      <div className={classes.container}>
        <Typography variant="h2" className={classes.container__title}>
          Mis pedidos:
        </Typography>
        {userHaveOrders ? (
          <div className={classes.container__orders}>
            <div className={classes.container__list}>
              <OrderInfoList orders={currentOrders} />
            </div>
            <Pagination
              className={classes.container__pagination}
              color="primary"
              count={pagesNumber}
              page={currentPage}
              onChange={handlePagination}
            />
          </div>
        ) : (
          <EmptyOrders />
        )}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
