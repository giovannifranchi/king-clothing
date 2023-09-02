import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: ()=>null,
    cartItems: {},
    setCartItems: ()=>null,
    totalAmount: 0,
    setTotalAmount: ()=>null,
});

export const CartProvider = ({children})=> {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [totalAmount, setTotalAmount] =  useState(0);
    

    const value = {isOpen, setIsOpen, cartItems, setCartItems, totalAmount, setTotalAmount};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}