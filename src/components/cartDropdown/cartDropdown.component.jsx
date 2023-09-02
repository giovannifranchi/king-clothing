import './cartDropdown.style.scss';

import DropdownCard from '../dropdownCard/dropDownCard.component';
import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';



const CartDropdown = () => {

    const {isOpen, cartItems, totalAmount} = useContext(CartContext);

    const cartItemsArray = ()=>{
        if(!Object.keys(cartItems).length) return [];
        const list = [];
        for(let item in cartItems) list.push(cartItems[item]);
        return list;
    }

    const cart = cartItemsArray();

    return (
        <div className={`${isOpen ? 'cart-dropdown-container' : 'd-none'}`}>

            {
                totalAmount ? 
                (<div className='cart-items'>
                    {
                        cart.map((item)=>{return <DropdownCard item={item} key={item.id}/>})
                    }
                </div>)
                :
                (<div className='empty-message'>No items in cart</div>)
            }

            <Button text='Go to Checkout' buttonType='inverted'/>
        </div>

    )
}

export default CartDropdown;