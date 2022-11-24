import { useEffect } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

//https://limitless-tundra-86000.herokuapp.com/


const skeletonArray = [0,1,2,3,4,5];

const Home = () => {

    const {categoryId, sortId} = useSelector((state => state.filter))
    const { items, status } = useSelector((state => state.pizzas))
    const {searchValue} = useContext(SearchContext)
    const dispatch = useDispatch()

     useEffect(() => {
       dispatch(fetchPizzas({categoryId, sortId, searchValue}))
     }, [categoryId, sortId, searchValue]);

    const skeletons = skeletonArray.map((item, index) => <Skeleton key={index}/>)
    const pizzas =  items.map(item => {
          return <PizzaBlock id = {item.id} key={item.id} title={item.title} price={item.price} imgUrl={item.imageUrl} size={item.sizes} type={item.types}/> })
    
    return (
      <>
        <div className="content__top">
        <Categories />
        <Sort /> 
        </div>
        <h2 className="content__title">Все пиццы</h2>
        { status === 'error' ? <div className='container '><h2>Произошла ошибка 😕</h2><p>Попробуйте еще раз.</p></div> :  
          <div className="content__items">
            { status === 'loading'  ? skeletons : pizzas }  
          </div> }
      </>
    )
}

export default Home;