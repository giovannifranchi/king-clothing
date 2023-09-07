import { CART_ACTION_TYPES, ItemsMap } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CartState } from "./cart.reducer";
import { ItemInfo } from "./cart.types";
import { withMatcher } from "../../utils/reducer/reducer.utils";
import { ActionWithPayload } from "../../utils/reducer/reducer.utils";



const addItemHelper = (item: ItemInfo, state: CartState): ItemsMap => {
    if (!(item.id in state.cartItems)) {
        return {
            ...state.cartItems, [item.id]: {
                info: item,
                itemAmount: 1
            }
        }
    } else {
        return {
            ...state.cartItems, [item.id]: {
                info: item,
                itemAmount: state.cartItems[item.id].itemAmount + 1
            }
        }
    }
}


const removeItemHelper = (item: ItemInfo, state: CartState): ItemsMap => {
    if (state.cartItems[item.id].itemAmount === 1) {
        const newItems = { ...state.cartItems };
        delete newItems[item.id];
        return newItems;
    } else {
        return {
            ...state.cartItems,
            [item.id]: {
                info: item,
                itemAmount: state.cartItems[item.id].itemAmount - 1
            }
        }
    }
}

const clearHelper = (item: ItemInfo, state: CartState): ItemsMap => {
    const newItems = { ...state.cartItems };
    delete newItems[item.id];
    return newItems;
}



export const toggleIsOpen = withMatcher((data: boolean): ActionWithPayload<CART_ACTION_TYPES.TOGGLE_IS_OPEN, boolean> => createAction(CART_ACTION_TYPES.TOGGLE_IS_OPEN, data));


export const addItemToCart = withMatcher((item: ItemInfo, cart: CartState): ActionWithPayload<CART_ACTION_TYPES.ADD_ITEM_TO_CART, ItemsMap> => {
    const newItems = addItemHelper(item, cart);
    return createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, newItems);
});


export const removeItemFromCart = withMatcher((item: ItemInfo, cart: CartState): ActionWithPayload<CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, ItemsMap> => {
    const newItems = removeItemHelper(item, cart);
    return createAction(CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, newItems);
});


export const clearItems = withMatcher((item: ItemInfo, cart: CartState): ActionWithPayload<CART_ACTION_TYPES.CLEAR_ITEMS, ItemsMap> => {
    const newItems = clearHelper(item, cart);
    return createAction(CART_ACTION_TYPES.CLEAR_ITEMS, newItems);
})

export const updateTotal = withMatcher((item: ItemInfo, totalAmount: number, cart: CartState): ActionWithPayload<CART_ACTION_TYPES.UPDATE_TOTAL_AMOUNT, number> => {
    const newTotalAmount = totalAmount - cart.cartItems[item.id].itemAmount;
    return createAction(CART_ACTION_TYPES.UPDATE_TOTAL_AMOUNT, newTotalAmount);
})