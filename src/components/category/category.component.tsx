import { useNavigate } from 'react-router-dom';
import './category.style.scss';
import { category } from '../../routes/home/home.component';

type CategoryPropTypes = {
    category:category;
}

const Category = ({category}:CategoryPropTypes)=> {
    const {id, title, imageUrl, route} = category
    const basicClasses:string = "col-sm-6"
    const additionalClasses:string = id < 4 ? "col-md-4" : "col-md-6";
    const navigate = useNavigate();
    const  onNavigateHandler = ()=>navigate(route);

    return (
        <div className={`${basicClasses} ${additionalClasses} background-container`} onClick={onNavigateHandler}>
            <div className='p-3 h-100 background d-flex align-items-center justify-content-center flex-column' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='category-body p-3'>
                    <h3 className='text-center'>{title}</h3>
                    <h4 className='text-center'>SHOP NOW</h4>
                </div>
            </div>
        </div>
    )
}

export default Category;