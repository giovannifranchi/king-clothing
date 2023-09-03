import './categoriesSection.style.scss';
import ProductCard from '../productCard/productCard.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';




const CategoriesSection = () => {

    const { categories } = useContext(CategoriesContext);

    return (
        <div className='container'>
            {
                Object.keys(categories).map((category)=>{
                    return (
                        <div className='row mt-3 mb-5' key={category}>
                            <h2>
                                <span>{category}</span>
                            </h2>
                            {
                                categories[category].slice(0, 4).map((item)=>(
                                    <div key={item.id} className='col-sm-6 col-md-3'>
                                        <ProductCard product={item}/>
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoriesSection;