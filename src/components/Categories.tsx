import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filter";
import { FetchPizzasParams } from "../redux/slices/pizzasSlice";

const Categories = () => {
  const { categoryId } = useSelector(
    (state: { filter: FetchPizzasParams }) => state.filter
  );
  const dispatch = useDispatch();

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(setCategoryId(index))}
              className={categoryId === index ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
