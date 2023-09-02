
import './dropdownCard.style.scss';

const DropdownCard = ({item})=> {

    const {info, itemAmount } = item;

    const { name, imageUrl, price } = info;

    const tryPreventBubble = (event)=>{
        event.stopPropagation();
        return console.log('pressed');
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
                        <button onClick={tryPreventBubble}>+</button>
                        <button onClick={tryPreventBubble}>-</button>
                    </span>
                </div>
                <span>{`Total: ${itemAmount * price}$`}</span>
            </div>
        </div>
    )
}

export default DropdownCard;