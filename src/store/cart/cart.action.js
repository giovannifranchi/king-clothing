import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const toggleIsOpen = (data)=>createAction(CART_ACTION_TYPES.TOGGLE_IS_OPEN, data);
export const addItemToCart = (item)=>createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, item);
export const removeItemFromCart = (item)=>createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, item);
export const clearItems = (item)=>createAction(CART_ACTION_TYPES.CLEAR_ITEMS, item);