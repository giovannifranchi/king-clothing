import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { Item } from "./cart.types";


export const selectCartReducer = (state): CartState => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartSlice): boolean => cartSlice.isOpen
);

export const selectAllItemsToArray = createSelector(
    [selectCartReducer],
    (cartSlice): Item[] => {
        const items: Array<Item> = [];
        Object.keys(cartSlice.cartItems).forEach((item) => items.push(cartSlice.cartItems[item]));
        return items;
    }
);

export const selectItemsTotalAmount = createSelector(
    [selectCartReducer],
    (cartSlice): number =>cartSlice.totalAmount
);

export const selectTotalPrice = createSelector(
    [selectAllItemsToArray],
    (cartArraySlice): number =>{
        return cartArraySlice.reduce((acc: number, item: Item)=> {
           return acc + item.info.price * item.itemAmount;
        }, 0)
    }
);


