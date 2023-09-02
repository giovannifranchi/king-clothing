import './cartDropdown.style.scss';

import Button from '../button/button.component';
import { UserContext } from '../../contexts/users.context';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


const CartDropdown = () => {

    const {isOpen, cartItems, totalAmount} = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'cart-dropdown-container' : 'd-none'}`}>

            {
                totalAmount ? 
                (<div className='cart-items'></div>)
                :
                (<div className='empty-message'>No items in cart</div>)
            }

            <Button text='Go to Checkout' buttonType='inverted'/>
        </div>

    )
}

export default CartDropdown;