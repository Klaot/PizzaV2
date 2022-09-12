import { useState } from "react";

 const Categories = ({value, onClickCategory}) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
   
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index)=> {
                    return (
                       <li key={index} 
                           onClick={() => onClickCategory(index)}
                           className={value === index ? 'active' : ''}>
                        {categoryName}
                       </li> 
                    )  
                })}
            </ul>
        </div>
    )
}

export default Categories;