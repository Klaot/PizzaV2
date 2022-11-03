import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from '../redux/slices/filter';

 const Categories = () => {
    
    const categoryId = useSelector((state => state.filter.categoryId))
    const dispatch = useDispatch()

    const categories = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
   
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index)=> {
                    return (
                       <li key={index} 
                           onClick={() => dispatch(setCategoryId(index))}
                           className={categoryId === index ? 'active' : ''}>
                        {categoryName}
                       </li> 
                    )  
                })}
            </ul>
        </div>
    )
}

export default Categories;