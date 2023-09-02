import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: ()=>null,
    cartItems: [],
    setCartItems: ()=>null
});

export const CartProvider = ({children})=> {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const value = {isOpen, setIsOpen, cartItems, setCartItems};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}