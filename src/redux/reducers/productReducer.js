import * as types from "../constants/productConstants";
import initialState from "./initialState";
const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS_LIST_SUCCESS:
            debugger;
            return action.products;
        default:
            return state;
    }
};

export default productReducer;
