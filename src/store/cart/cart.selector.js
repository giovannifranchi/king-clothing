import { createSelector } from "reselect";


const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isOpen
);

export const selectAllItemsToArray = createSelector(
    [selectCartReducer],
    (cartSlice) => {
        const items = [];
        Object.keys(cartSlice.cartItems).forEach((item) => items.push(cartSlice.cartItems[item]));
        return items;
    }
);

export const selectItemsTotalAmount = createSelector(
    [selectCartReducer],
    (cartSlice)=>cartSlice.totalAmount
);


