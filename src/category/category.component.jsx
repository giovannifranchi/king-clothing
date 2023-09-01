

const Category = ({category})=> {
    const {id, title, imageUrl} = category
    const basicClasses = "col-sm-6"
    const additionalClasses = id < 4 ? "col-md-4" : "col-md-6";
    return (
        <div className={`${basicClasses} ${additionalClasses}`}>
            <h3 className="text-center">{title}</h3>
        </div>
    )
}

export default Category;