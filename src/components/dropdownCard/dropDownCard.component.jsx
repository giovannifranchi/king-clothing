
import './dropdownCard.style.scss';

const DropdownCard = ({item})=> {

    const {info, itemAmount } = item;

    const { name, imageUrl, price } = info;

    return (
        <div>
            <span>{name}</span>
            <span>{itemAmount}</span>
            <span>{price * itemAmount}</span>
        </div>
    )
}

export default DropdownCard;