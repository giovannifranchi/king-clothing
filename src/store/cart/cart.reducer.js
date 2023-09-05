import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    isOpen: false,
    cartItems: {},
    totalAmount: 0
};


export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    const addItemHelper = (item) => {
        if (!(item.id in state.cartItems)){
            return {
                ...state.cartItems, [item.id]: {
                    info: item,
                    itemAmount: 1
                }
            }
        }else {
            return {
                ...state.cartItems, [item.id]:{
                    info: item,
                    itemAmount: state.cartItems[item.id].itemAmount + 1
                }
            }
        }
    }

    const removeItemHelper = (item)=> {
        if(state.cartItems[item.id].itemAmount === 1){
            const newItems = {...state.cartItems};
            delete newItems[item.id];
            return newItems;
        }else {
            return {
                ...state.cartItems,
                [item.id]:{
                    info: item,
                    itemAmount: state.cartItems[item.id].itemAmount - 1
                }
            }
        }
    }

    const clearHelper = (item)=> {
        const newItems = { ...state.cartItems };
        delete newItems[item.id];
        return newItems;
    }

    switch (type) {
        case CART_ACTION_TYPES.TOGGLE_IS_OPEN:
            return { ...state, isOpen: payload };
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return { ...state, cartItems: addItemHelper(payload), totalAmount: state.totalAmount + 1 };
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return { ...state, cartItems: removeItemHelper(payload), totalAmount: state.totalAmount - 1 };
        case CART_ACTION_TYPES.CLEAR_ITEMS:
            return { ...state, cartItems: clearHelper(payload), totalAmount: state.totalAmount - state.cartItems[payload.id].itemAmount };
        default:
            return state;
    }
}