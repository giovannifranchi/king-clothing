import './shop.style.scss';
import CategoriesSection from '../../components/categoriesSection/categoriesSection.component';
import { Route, Routes } from 'react-router-dom';
import CategoryDetail from '../../components/categoryDetail/categoryDetail.component';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CategoryAction, fetchCategoriesAsync } from '../../store/categories/categories.action';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/store';



const Shop = () => {

    const dispatch: ThunkDispatch<RootState, unknown, CategoryAction> = useDispatch();

    useEffect(()=> {
        dispatch(fetchCategoriesAsync());
    }, [dispatch])
    
    return (
        <Routes>
            <Route index element={<CategoriesSection/>} />
            <Route path=':category' element={<CategoryDetail/>}/> 
        </Routes>
    )
}

export default Shop;