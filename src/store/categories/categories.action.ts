import { CATEGORIES_ACTION_TYPES } from "./categories.type"
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"
import { Category } from "./categories.type";
import { Dispatch } from "react";
import { DocumentData } from "firebase/firestore";
import { withMatcher } from "../../utils/reducer/reducer.utils";


export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, CategoryData[]>

export type FetchCategoriesFailure = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailure

export type CategoryData = Category | DocumentData

export const fetchCategoriesStart = withMatcher(():FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher((categoryArray: CategoryData[]):FetchCategoriesSuccess=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoryArray));

export const fetchCategoriesFailure = withMatcher((error:Error):FetchCategoriesFailure=>createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));


export const fetchCategoriesAsync = ()=>{
    return async (dispatch:Dispatch<CategoryAction>)=> {
        dispatch(fetchCategoriesStart());
        try {
            
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(fetchCategoriesSuccess(categoriesArray));
            
        } catch (error) {
            dispatch(fetchCategoriesFailure(error));
        }
    }
}

