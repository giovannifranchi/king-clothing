export const selectIsCartOpen = (state)=>state.cart.isOpen;

export const selectAllItemsToArray = (state)=>{//TODO: use reselect to avoid multiple recalls 
    const items = [];
    Object.keys(state.cart.cartItems).forEach((item)=> items.push(state.cart.cartItems[item]));
    return items;
}

export const selectItemsTotalAmount = (state)=>state.cart.totalAmount;