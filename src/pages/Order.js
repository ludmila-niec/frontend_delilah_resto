import React, { useEffect } from "react";
import Layout from "../components/common/Layout";
import OrderStatus from "../components/Order/OrderStatus";
import OrderDetail from "../components/Order/OrderDetail";
import Loading from "../components/common/Loading";

//redux
import { connect } from "react-redux";
import { loadOrders } from "../redux/actions/orderActions";

//material ui
import { Typography } from "@material-ui/core";

const Order = ({ order, loading, loadOrders }) => {
    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <Layout>
            <Typography variant="h5">Seguir mi pedido</Typography>
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
        </Layout>
    );
};

function mapStateToProps(state, ownProps) {
    const orderId = ownProps.match.params.id;
    return {
        order:
            state.orders.orderList.length === 0
                ? null
                : state.orders.orderList.find(
                      (order) => order.order_id == orderId
                  ),
        loading: state.apiCallsInProgress > 0,
    };
}

const mapDispatchToProps = {
    loadOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
