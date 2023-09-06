export const createAction = (type, payload) => ({ type, payload });

export const addItemHelper = (item, state) => {
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

export const removeItemHelper = (item, state) => {
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

export const clearHelper = (item, state) => {
    const newItems = { ...state.cartItems };
    delete newItems[item.id];
    return newItems;
}