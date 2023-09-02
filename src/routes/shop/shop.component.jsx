import './shop.style.scss';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';


const Shop = ()=> {

    const { products } = useContext(ProductContext);

    return (
        <div>
            {
                products.map((product)=> (<h2>{product.name}</h2>))
            }
        </div>
    )
}

export default Shop;