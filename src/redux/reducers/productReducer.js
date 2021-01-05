import * as types from "../constants/productConstants";
import initialState from "./initialState";
export const productReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case types.PRODUCT_DETAIL_SUCCESS:
            return action.products;
        default:
            return state;
    }
};
