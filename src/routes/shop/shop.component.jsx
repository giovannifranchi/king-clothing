import './shop.style.scss';
import CategoriesSection from '../../components/categoriesSection/categoriesSection.component';
import { Route, Routes } from 'react-router-dom';
import CategoryDetail from '../../components/categoryDetail/categoryDetail.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/categories.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



const Shop = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
        const fetchCategories = async ()=>{
            const response = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(response));
        };

        fetchCategories();
    }, [dispatch])
    
    return (
        <Routes>
            <Route index element={<CategoriesSection/>} />
            <Route path=':category' element={<CategoryDetail/>}/> 
        </Routes>
    )
}

export default Shop;