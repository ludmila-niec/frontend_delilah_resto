import * as types from "../constants/favoriteConstants";
import initialState from "./initialState";

export const favoriteReducer = (state = initialState.favorites, action) => {
    switch (action.type) {
        case types.LOAD_FAV_LIST_SUCCESS:
            return action.favorites;

        case types.FAV_ADD_SUCCESS:
            return [...state, { ...action.favorite }];
        case types.DELETE_FAV_OPTIMISTIC:
            return state.filter(
                (item) => item.product_id !== action.product_id
            );

        default:
            return state;
    }
};

// export const addFavoriteReducer = (state = {}, action) => {
//     switch (action.type) {
//         case FAV_ADD_REQUEST:
//             return { loading: true };
//         case FAV_ADD_SUCCESS:
//             return {
//                 loading: false,
//                 success: true,
//             };
//         case FAV_ADD_FAIL:
//             return { loading: false, error: action.payload };
//         case FAV_CLEAR_ACTION:
//             return { success: null };
//         default:
//             return state;
//     }
// };

// export const deleteFavoriteReducer = (state = {}, action) => {
//     switch (action.type) {
//         case FAV_DELETE_REQUEST:
//             return { loading: true };
//         case FAV_DELETE_SUCCESS:
//             return {
//                 loading: false,
//                 success: true,
//             };
//         case FAV_DELETE_FAIL:
//             return { loading: false, error: action.payload };
//         case FAV_CLEAR_ACTION:
//             return { success: null };
//         default:
//             return state;
//     }
// };
