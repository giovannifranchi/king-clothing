
import './dropdownCard.style.scss';

const DropdownCard = ({item})=> {

    const {info, itemAmount } = item;

    const { name, imageUrl } = info;

    return (
        <div>
            <span>{name}</span>
            <span>{itemAmount}</span>
        </div>
    )
}

export default DropdownCard;