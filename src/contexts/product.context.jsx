import { createContext, useEffect } from "react";
import { useState } from "react";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils"; used to seed db;
import SHOP_DATA from "../utils/shop-data";


export const ProductContext = createContext({
    products: [],
    setProducts: ()=>null
});

export const ProductProvider = ({children})=>{
    //USED to seed db
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    const [products, setProducts] = useState(SHOP_DATA);

    const value = {products, setProducts}

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}