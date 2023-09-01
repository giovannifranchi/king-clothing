import './category.style.scss';

const Category = ({category})=> {
    const {id, title, imageUrl} = category
    const basicClasses = "col-sm-6"
    const additionalClasses = id < 4 ? "col-md-4" : "col-md-6";
    return (
        <div className={`${basicClasses} ${additionalClasses} background-container`}>
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