import './cartTable.style.scss';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartTable = () => {

    const { cartItems, addItemstoCart, removeItemsFromCart, removeAllItems } = useContext(CartContext);

    useEffect(() => {
        const itemsArray = Object.keys(cartItems).map((item) => cartItems[item]);//join reduce and mapping together
        setItemsArray(itemsArray);
        const priceForAll = itemsArray.reduce((total, current)=> (current.itemAmount * current.info.price) + total, 0);
        setTotalPrice(priceForAll);
    }, [cartItems]);


    const [itemsArray, setItemsArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>Description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td >Remove</td>
                    </tr>
                </thead>
                <tbody>
                    {itemsArray.map(({info, itemAmount}) => (
                        <tr key={info.id}>
                            <td>
                                <img height={180} width={200} src={info.imageUrl}/>
                            </td>
                            <td className='align-middle'>{info.name}</td>
                            <td className='align-middle'>
                                <button onClick={()=>{removeItemsFromCart(info)}}> <i class="fa-solid fa-chevron-left"></i> </button>
                                <span>{itemAmount}</span>
                                <button onClick={()=>{addItemstoCart(info)}}> <i class="fa-solid fa-chevron-right"></i> </button>
                            </td>
                            <td className='align-middle'>{info.price}</td>
                            <td className='align-middle'>
                                <button onClick={()=>{removeAllItems(info)}}><i class="fa-solid fa-xmark"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>{totalPrice} price</h2>
        </>
    )
}

export default CartTable;