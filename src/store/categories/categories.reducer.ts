import { CATEGORIES_ACTION_TYPES, Category } from "./categories.type";
import { CategoryAction, CategoryData } from "./categories.action";

export type CategoriesState = {
    readonly categories: CategoryData[];
    readonly isLoading: boolean;
    readonly error: Error | null;
}


export const INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
}

export const categoriesReducer = (state = INITIAL_STATE, action = {} as CategoryAction)=>{
    

    switch(action.type){
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return {...state, isLoading: true};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: action.payload ,isLoading: false};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
            return {...state, isLoading: false, error: action.payload};
        default:
            return state;
    }
}