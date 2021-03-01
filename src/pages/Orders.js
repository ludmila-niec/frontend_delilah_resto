import React, { useState, useEffect } from "react";
import EmptyOrders from "../components/Orders/EmptyOrders";
import OrderInfoList from "../components/Orders/OrderInfoList";
import Loading from "../components/common/Loading";
import hambugerIlust from "../assets/status/Hamburger-ilust.svg";

//redux
import { connect } from "react-redux";
import { loadOrders } from "../redux/actions/orderActions";

//material ui
import { Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "8rem 2rem",
    },
    container__title: {
        fontSize: "2rem",
        fontWeight: theme.typography.fontWeightBold,
        textTransform: "capitalize",
        color: "#214C8A",
        marginBottom: theme.spacing(1),

        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",
        },
    },
    container__orders: {
        [theme.breakpoints.up("sm")]: {
            width: "60vw",
            margin: "4rem auto",
        },
        [theme.breakpoints.up("md")]: {
            width: "80vw",
            display: "flex",
            justifyContent: "center",

            borderRadius: theme.shape.borderRadius,
            boxShadow: "0px 4px 11px 4px rgba(0, 0, 0, 0.1)",
        },
    },
    container__ilustration: {
        display: "none",
        [theme.breakpoints.up("lg")]: {
            backgroundColor: theme.palette.secondaryLighter.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4rem",
            flex: 1,
        },
    },
    container__list: {
        marginTop: "3rem",
        [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "6rem",
            flex: 1,
        },
    },
    container__pagination: {
        "& > ul": {
            margin: "3rem auto",
            justifyContent: "center",
        },
    },
}));

const Order = ({ orders, loading, loadOrders }) => {
    const classes = useStyles();
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

    //reverse array of orders. Show first the most recent
    const reversedOrders = [...orders];
    const newerOrders = reversedOrders.reverse();

    //get current orders
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = newerOrders.slice(
        indexOfFirstOrder,
        indexOfLastOrder
    );
    //get number of pages
    const pagesNumber = Math.ceil(orders.length / ordersPerPage);

    const userHaveOrders = orders.length > 0;

    return (
        <main>
            <div className={classes.container}>
                <Typography variant="h2" className={classes.container__title}>
                    Mis pedidos:
                </Typography>
                {loading ? (
                    <Loading />
                ) : (
                    <div className={classes.container__orders}>
                        {userHaveOrders ? (
                            <>
                                <div className={classes.container__ilustration}>
                                    {/* imagen */}
                                    <img
                                        src={hambugerIlust}
                                        alt="hambuger ilustration"
                                    />
                                </div>
                                <div className={classes.container__list}>
                                    <OrderInfoList orders={currentOrders} />
                                    <Pagination
                                        className={
                                            classes.container__pagination
                                        }
                                        color="primary"
                                        count={pagesNumber}
                                        page={currentPage}
                                        onChange={handlePagination}
                                    />
                                </div>
                            </>
                        ) : (
                            <EmptyOrders />
                        )}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Order);
