import './categoryDetail.style.scss';
import { useParams } from 'react-router-dom';
import ProductCard from '../productCard/productCard.component';
import { getCategories } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';


const CategoryDetail = ()=> {

    const categories = useSelector(getCategories);
    const { category } = useParams();
    const categoriesToMap = categories[category] || [];

    return(
        <div className='container mt-5 py-5'>
            <h2 className='mt-5 text-center'>{category.toUpperCase()}</h2>
            <div className='row gy-5 py-5'>
            {
                    categoriesToMap.map((item)=>(
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