import { CATEGORIES_ACTION_TYPES } from "./categories.type"
import { createAction } from "../../utils/reducer/reducer.utils"

export const setCategories = (data)=> (createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, data));