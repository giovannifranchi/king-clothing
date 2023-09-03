import './shop.style.scss';
import CategoriesSection from '../../components/categoriesSection/categoriesSection.component';
import { Route, Routes } from 'react-router-dom';
import CategoryDetail from '../../components/categoryDetail/categoryDetail.component';


const Shop = () => {
    
    return (
        <Routes>
            <Route index element={<CategoriesSection/>} />
            <Route path=':category' element={<CategoryDetail/>}/> 
        </Routes>
    )
}

export default Shop;