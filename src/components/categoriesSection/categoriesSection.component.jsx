import './categoriesSection.style.scss';
import ProductCard from '../productCard/productCard.component';



const CategoriesSection = ({ category, items }) => {

    const getFirstFour = items.slice(0, 4);

    return (
        <div className='mt-3 mb-5'>
            <h2>{category.toUpperCase()}</h2>
            <div className='row gy-5'>
                {getFirstFour.map((item) => (
                    <div key={item.id} className='col-sm-6 col-md-3'>
                        <ProductCard product={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoriesSection;