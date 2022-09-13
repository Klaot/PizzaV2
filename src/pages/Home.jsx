import { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {

    const [pizzaItem, setPizzaItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0)
    const [sortType, setSortType] = useState(0);
    const skeletonArray = [0,1,2,3,4,5];

    const onClickCategory = (id) => {
      setCategoryId(id)
    }

     useEffect(() => {
      setIsLoading(true)
      fetch(`https://limitless-tundra-86000.herokuapp.com/${categoryId}`)
     .then(response => response.json()).then(res => {
       setPizzaItem(res);
       setIsLoading(false);
     })
       window.scroll(0,0)
     }, [categoryId]);

    return (
        <>
            <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => onClickCategory(id)}/>
            <Sort /> 
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                isLoading ? skeletonArray.map((item, index) => <Skeleton key={index}/>) : pizzaItem.map(item => {
                  return <PizzaBlock
                   key={item.id}
                   title={item.title}
                   price={item.price}
                   imgUrl={item.imageUrl}
                   size={item.sizes}
                   type={item.types}
                   /> 
                })
              }  
            </div>
        </>
      )
}

export default Home;