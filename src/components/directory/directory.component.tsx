import Category from "../category/category.component";
import './directory.style.scss'
import { category } from "../../routes/home/home.component";

type DirecotoryPropTypes = {
    categories: category[];
}

const Directory = ({categories}:DirecotoryPropTypes)=> {
    return (
        <div className="container pt-5 d-flex align-items-center justify-content-center home-container">
            <div className="row gy-3 align-items-center">
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