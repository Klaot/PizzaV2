import { useState } from "react";

 const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const activeCategories = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((item, index)=> {
                    return (
                       <li key={Math.random()} onClick={() => activeCategories(index)}
                        className={activeIndex === index ? 'active' : ''}>
                        {item}
                       </li> 
                    )  
                })}
            </ul>
        </div>
    )
}

export default Categories;