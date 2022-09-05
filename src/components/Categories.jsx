import { useState } from "react";

 const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const categories = ['Все','Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
   
    return (
        <div className="categories">
            <ul>
                {categories.map((item, index)=> {
                    return (
                       <li key={Math.random()} onClick={() => setActiveIndex(index)}
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