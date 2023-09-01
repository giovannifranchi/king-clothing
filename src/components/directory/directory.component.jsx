import Category from "../../category/category.component";


const Directory = ({categories})=> {
    return (
        <div className="container">
            <div className="row gy-3">
                {
                    categories.map((category)=>{
                        return (<Category category={category} key={category.id}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Directory;