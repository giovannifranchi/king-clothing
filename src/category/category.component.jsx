import './category.style.scss';

const Category = ({category})=> {
    const {id, title, imageUrl} = category
    const basicClasses = "col-sm-6"
    const additionalClasses = id < 4 ? "col-md-4" : "col-md-6";
    return (
        <div className={`${basicClasses} ${additionalClasses} background-container`}>
            <div className='px-3 h-100 background d-flex align-items-center justify-content-center' style={{backgroundImage: `url(${imageUrl})`}}>
                <div className='category-body px-3'>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Category;