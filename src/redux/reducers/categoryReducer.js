import * as types from "../constants/categoryConstants";
import initialState from "./initialState";

export const categoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case types.CATEGORY_LIST_SUCCESS:
            return { ...state, categories: action.categories };
        default:
            return state;
    }
};

// export const categoryProductReducer = (state = {}, action) => {
//     switch (action.type) {
//         case CATEGORY_DETAIL_REQUEST:
//             return { loading: true };
//         case CATEGORY_DETAIL_SUCCESS:
//             return { loading: false, categoryInfo: action.payload };
//         case CATEGORY_DETAIL_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };
