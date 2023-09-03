import './shop.style.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoriesSection from '../../components/categoriesSection/categoriesSection.component';


const Shop = () => {

    const { categories } = useContext(CategoriesContext);

    

    return (
        <div className='container'>
            <div>
                {Object.keys(categories).length ? (
                    Object.keys(categories).map((category) => (
                        <CategoriesSection items={categories[category]} category={category} key={category} />
                    ))
                ) : (
                    <h3>...Loading</h3>
                )}
            </div>
        </div>
    )
}

export default Shop;