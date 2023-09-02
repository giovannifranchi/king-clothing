
import './cartIcon.style.scss';
import CartDropdown from '../cartDropdown/cartDropdown.component';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { UserContext } from '../../contexts/users.context';
import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';


const CartIcon = () => {

    const {isOpen, setIsOpen} = useContext(CartContext);

    const toggleDropDown = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div onClick={toggleDropDown} className='cart-icon-container'>

            <ShoppingIcon className='shopping-icon' />

            <span className='item-count'>0</span>
            <CartDropdown/>
        </div>
    )
}

export default CartIcon;