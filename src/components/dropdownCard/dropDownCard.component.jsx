
import './dropdownCard.style.scss';

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';

const DropdownCard = ({item})=> {


    const { addItemstoCart } = useContext(CartContext);

    const {info, itemAmount } = item;

    const { name, imageUrl, price } = info;

    const addItems = (event)=>{
        event.stopPropagation();
        addItemstoCart(info);
    }


    return (
        <div className='row mb-3'>
            <div className='col-4'>
                <img src={imageUrl} alt={name} className='img-fluid'/>
            </div>
            <div className='col-8 d-flex flex-column'>
                <span>{name}</span>
                <div className='d-flex justify-content-between pe-3'>
                    <span>{`${itemAmount} x ${price}$`}</span>
                    <span className='d-flex '>
                        <button onClick={addItems}>+</button>
                        <button onClick={()=>{}}>-</button>
                    </span>
                </div>
                <span>{`Total: ${itemAmount * price}$`}</span>
            </div>
        </div>
    )
}

export default DropdownCard;