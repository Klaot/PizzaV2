import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../App';
import { useSelector } from 'react-redux';
import Axios from 'axios'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
// import Pagenation from '../components/Pagenation/Pagenation';
//https://limitless-tundra-86000.herokuapp.com/


 const skeletonArray = [0,1,2,3,4,5];
const Home = () => {

    const {categoryId, sortId } = useSelector((state => state.filter))
    
    const { searchValue } = useContext(SearchContext)
    const [pizzaItem, setPizzaItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [currentPage, setCurrentPage] = useState(1)

     useEffect(() => {
      setIsLoading(true)
      Axios.get(`https://limitless-tundra-86000.herokuapp.com/${categoryId}?sortType=${sortId}&${'search='+ searchValue.toLowerCase()}`)
     .then(res => {
       setPizzaItem(res.data);
       setIsLoading(false);
     })
     }, [categoryId, sortId, searchValue,]);

    return (
        <>
          <div className="content__top">
          <Categories />
          <Sort /> 
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading || pizzaItem.length === 0 ? skeletonArray.map((item, index) => <Skeleton key={index}/>) : pizzaItem.map(item => {
                return <PizzaBlock
                  id = {item.id}
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
          {/* <Pagenation setCurrentPage={(number) => setCurrentPage(number)}/> */}
        </>
      )
}

export default Home;