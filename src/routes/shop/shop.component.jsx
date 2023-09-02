import './shop.style.scss';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/product.context';
import ProductCard from '../../components/productCard/productCard.component';


const Shop = () => {

    const { products } = useContext(ProductContext);

    return (
        <div className='container'>
            <div className='row gy-5'>
                {
                    products.map((product) => (
                        <div className='col-sm-6 col-md-4'>
                            <ProductCard product={product} key={product.id} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Shop;