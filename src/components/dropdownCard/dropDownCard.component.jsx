
import './dropdownCard.style.scss';

const DropdownCard = ({item})=> {

    const {info, itemAmount } = item;

    const { name, imageUrl, price } = info;

    return (
        <div className='row mb-3'>
            <div className='col-4'>
                <img src={imageUrl} alt={name} className='img-fluid'/>
            </div>
            <div className='col-8 d-flex flex-column'>
                <span>{name}</span>
                <div>
                    <span>{`${itemAmount} x ${price}$`}</span>
                </div>
                <span>{`Total: ${itemAmount * price}$`}</span>
            </div>
        </div>
    )
}

export default DropdownCard;