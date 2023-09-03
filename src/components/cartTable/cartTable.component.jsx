import './cartTable.style.scss';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartTable = () => {

    const { cartItems, addItemstoCart, removeItemsFromCart, removeAllItems } = useContext(CartContext);


    useEffect(() => {
        const getArrayAndTotalPrice = (() => {
            const list = [];
            let totalAmount = 0;
            Object.keys(cartItems).forEach((item) => {
                list.push(cartItems[item])
                totalAmount = totalAmount + cartItems[item].itemAmount * cartItems[item].info.price;
            })
            setItemsArray(list);
            setTotalPrice(totalAmount);
        })
        getArrayAndTotalPrice();
    }, [cartItems]);


    const [itemsArray, setItemsArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    return (
        <div className='mt-5 pt-5'>
            {
                itemsArray.length > 0 && (
                    <>
                    <h2>This is your cart</h2>
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
                            {itemsArray.map(({ info, itemAmount }) => (
                                <tr key={info.id}>
                                    <td>
                                        <img height={180} width={200} src={info.imageUrl} alt={info.name} />
                                    </td>
                                    <td className='align-middle'>{info.name}</td>
                                    <td className='align-middle'>
                                        <button className='cart-card-button' onClick={() => { removeItemsFromCart(info) }}> <i className="fa-solid fa-chevron-left"></i> </button>
                                        <span>{itemAmount}</span>
                                        <button className='cart-card-button' onClick={() => { addItemstoCart(info) }}> <i className="fa-solid fa-chevron-right"></i> </button>
                                    </td>
                                    <td className='align-middle'>{info.price}</td>
                                    <td className='align-middle'>
                                        <button onClick={() => { removeAllItems(info) }} className='cart-card-button'><i className="fa-solid fa-xmark"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
                )
            }
            {totalPrice ? <h2 className='text-end'>Price: {totalPrice}$</h2> : <h2 className='text-center mt-5'>No Items in the cart</h2>}
        </div>
    )
}

export default CartTable;