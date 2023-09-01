import Category from "../../category/category.component";


const Directory = ({categories})=> {
    return (
        <div className="container">
            <div className="row">
                {
                    categories.map((category)=>{
                        return (<Category category={category}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Directory;