import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAIL,
    CATEGORY_DETAIL_REQUEST,
    CATEGORY_DETAIL_SUCCESS,
    CATEGORY_DETAIL_FAIL,
} from "../constants/categoryConstants";

export const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categoryList: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const categoryProductReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_DETAIL_REQUEST:
            return { loading: true };
        case CATEGORY_DETAIL_SUCCESS:
            return { loading: false, categoryInfo: action.payload };
        case CATEGORY_DETAIL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
