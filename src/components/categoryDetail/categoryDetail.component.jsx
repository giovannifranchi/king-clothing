import './categoryDetail.style.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard/productCard.component';


const CategoryDetail = ()=> {

    const { categories } = useContext(CategoriesContext);
    const { category } = useParams();
    console.log(category);
    console.log(categories);

    return(
        <div className='container'>
            <h2 className='my-3 text-center'>{category.toUpperCase()}</h2>
            <div className='row gy-5'>
            {
                    categories[category].map((item)=>(
                        <div className='col-sm-6 col-md-3' key={item.id}>
                            <ProductCard product={item}/>
                        </div>
                    ))
            }
            </div>
        </div>
    )
}

export default CategoryDetail;