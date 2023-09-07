import { AnyAction } from "redux";
import {  ItemsMap } from "./cart.types";
import { addItemToCart, removeItemFromCart, clearItems, updateTotal, toggleIsOpen } from "./cart.action";

export type CartState = {
    readonly isOpen: boolean;
    readonly cartItems: ItemsMap;
    readonly totalAmount: number;
}

const INITIAL_STATE = {
    isOpen: false,
    cartItems: {},
    totalAmount: 0
};


export const cartReducer = (state = INITIAL_STATE, action = {} as AnyAction):CartState => {
    
    if(toggleIsOpen.match(action)) return { ...state, isOpen: action.payload };

    if(addItemToCart.match(action)) return { ...state, cartItems: action.payload, totalAmount: state.totalAmount + 1 };

    if(removeItemFromCart.match(action)) return { ...state, cartItems: action.payload, totalAmount: state.totalAmount - 1 };

    if(clearItems.match(action)) return { ...state, cartItems: action.payload };

    if(updateTotal.match(action)) return { ...state, totalAmount: action.payload };

    return state;
}


// switch (type) {
//     case CART_ACTION_TYPES.TOGGLE_IS_OPEN:
//         return { ...state, isOpen: payload };
//     case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
//         return { ...state, cartItems: payload, totalAmount: state.totalAmount + 1 };
//     case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
//         return { ...state, cartItems: payload, totalAmount: state.totalAmount - 1 };
//     case CART_ACTION_TYPES.CLEAR_ITEMS:
//         return { ...state, cartItems: payload};
//     case CART_ACTION_TYPES.UPDATE_TOTAL_AMOUNT:
//         return {...state, totalAmount:payload};
//     default:
//         return state;
// }