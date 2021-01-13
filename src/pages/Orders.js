import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import EmptyOrders from "../components/Orders/EmptyOrders";
import OrderInfoList from "../components/Orders/OrderInfoList";
import Loading from "../components/common/Loading";

//redux
import { connect } from "react-redux";
import { loadOrders } from "../redux/actions/orderActions";

//material ui
import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const Order = ({ orders, loading, loadOrders }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage, setOrdersPerPage] = useState(5);
    const handlePagination = (event, value) => {
        setCurrentPage(value);
    };
    useEffect(() => {
        if (orders.length === 0) {
            loadOrders();
        }
    }, []);

    //get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders =
        orders && orders.slice(indexOfFirstOrder, indexOfLastOrder);
    //get number of pages
    const pagesNumber = orders && Math.ceil(orders.length / ordersPerPage);

    const userHaveOrders = orders.length > 0;

    return (
        <Layout>
            <Typography variant="h5">Mis pedidos:</Typography>
            {loading ? (
                <Loading />
            ) : (
                <>
                    {!userHaveOrders ? (
                        <EmptyOrders />
                    ) : (
                        <>
                            <OrderInfoList orders={currentOrders} />
                            <Pagination
                                style={{ margin: "2rem auto" }}
                                color="primary"
                                count={pagesNumber}
                                page={currentPage}
                                onChange={handlePagination}
                            />
                        </>
                    )}
                </>
            )}
        </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
