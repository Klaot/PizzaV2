import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPizzas } from "../redux/slices/pizzasSlice";
import ErrorLoading from "../components/Error/ErrorLoading";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { IPizza } from "../redux/slices/pizza.type";
import { RootState, useAppDispatch } from "../redux/store";

//https://limitless-tundra-86000.herokuapp.com/

const skeletonArray = [0, 1, 2, 3, 4, 5];

const Home = () => {
  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue
  );
  const sortId = useSelector((state: RootState) => state.filter.sortId);
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);
  const { items, status } = useSelector((state: RootState) => state.pizzas);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPizzas({ categoryId, sortId, searchValue }));
  }, [dispatch, categoryId, sortId, searchValue]);

  const skeletons = skeletonArray.map((_, index) => <Skeleton key={index} />);
  const pizzas = items?.map((item: IPizza) => {
    return (
      <PizzaBlock
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        title={item.title}
        price={item.price}
        sizes={item.sizes}
        types={item.types}
      />
    );
  });

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <ErrorLoading />
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
    </>
  );
};

export default Home;
