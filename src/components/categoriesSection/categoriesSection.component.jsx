import './categoriesSection.style.scss';
import ProductCard from '../productCard/productCard.component';
import { setCategories } from '../../store/categories/categories.action';
import { useSelector } from 'react-redux';
import { getCategories } from '../../store/categories/categories.selector';
import { useEffect } from 'react';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';




const CategoriesSection = () => {

    // const { categories } = useContext(CategoriesContext);
    const categories = useSelector(getCategories);
    const dispatch = useDispatch();

    useEffect(()=>{
        const setNewCategories = (async ()=>{
            const response = await getCategoriesAndDocuments()
            dispatch(setCategories(response));
        })
        setNewCategories();
    }, [dispatch]) //added for eslint

    return (
        <div className='container py-5 mt-5'>
            {
                Object.keys(categories).map((category)=>{
                    return (
                        <div className='row mt-3 mb-5' key={category}>
                            <h2>
                                <NavLink className='text-reset text-decoration-none' to={category}>{category.toUpperCase()}</NavLink>
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