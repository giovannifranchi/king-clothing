import './productCard.style.scss'
import Button from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const ProductCard = ({product})=> {

    const { setCartItems, setTotalAmount, totalAmount, cartItems } = useContext(CartContext);

    const { id, name, imageUrl, price } = product;

    const addItemstoCart = (item) => {
        if (!(item.id in cartItems)) {
            setCartItems((prevCartItems) => ({
                ...prevCartItems,
                [item.id]: { info: item, itemAmount: 1 },
            }));
        } else {
            setCartItems((prevCartItems) => ({
                ...prevCartItems,
                [item.id]: {
                    info: item,
                    itemAmount: prevCartItems[item.id].itemAmount + 1,
                },
            }));
        }
        setTotalAmount(totalAmount + 1);
    };


    const addProduct = ()=> {
        addItemstoCart(product);
    }

    return (
        <div className='product-card-container'>

            <img src={imageUrl} alt={name}/>

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button buttonType='inverted' text='Add To Cart' onClick={addProduct} />

        </div>
    )
}

export default ProductCard;