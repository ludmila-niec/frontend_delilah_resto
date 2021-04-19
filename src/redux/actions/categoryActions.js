import * as types from "../constants/categoryConstants";
import * as categoryApi from "../../api/categoryApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCategoriesSuccess(categories) {
    return { type: types.CATEGORY_LIST_SUCCESS, categories };
}
// export function loadCategorySuccess(category) {
//     return { type: types.CATEGORY_DETAIL_SUCCESS, category };
// }

export const loadCategories = () => async (dispatch, getState) => {
    try {
        dispatch(beginApiCall());
        const response = await categoryApi.getCategories(getState);
        const categories = response.data.data;
        return dispatch(loadCategoriesSuccess(categories));
    } catch (error) {
        dispatch(apiCallError(error));
    }
};

// export const getCategoryById = (id) => async (dispatch, getState) => {
//     try {
//         dispatch(beginApiCall());
//         const response = await categoryApi.getCategoryById(getState, id);
//         const category = response.data.data;
//         debugger;
//         return dispatch(loadCategorySuccess(category));
//     } catch (error) {
//         dispatch(apiCallError(error));
//         console.log(error.response);
//     }
// };
