export default {
    userRegister: { data: null, error: "" },
    userLogin: { token: null, error: "" },
    categories: [],
    products: [],
    favorites: [],
    cart: {},
    orders: { orderList: [], newOrder: {}, currentOrder:{} },
    apiCallsInProgress: 0,
};
