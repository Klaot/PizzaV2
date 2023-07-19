import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { IPizza } from "../../redux/slices/pizza.type";

interface PizzaBlockProps {
  id: number;
  title: string;
  price?: number;
  imageUrl: string;
  sizes?: number[];
  types?: number[];
}

const typePizza = ["тонкое", "традиционное"];

const PizzaBlock = ({
  id,
  imageUrl,
  title,
  price,
  sizes,
  types,
}: PizzaBlockProps) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const cartItem = useSelector((state: any) => state.cart.items);
  const { items } = useSelector((state: any) => state.pizzas);

  const dispatch = useDispatch();

  const onClickAdd = (value: any) => {
    const newPizzaInCart = items?.find(
      (item: IPizza) => item.id === value.target.id
    );

    const item: IPizza = {
      ...newPizzaInCart,
      id,
      title,
      price,
      imageUrl,
      types: new Array(activeType),
      sizes: new Array(activeSize),
    };
    dispatch(addItem(item));
  };

  const addedCount = cartItem ? cartItem.count : 0;

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        <Link to={`/pizzas/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types?.map((_, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveType(index)}
                  className={activeType === index ? "active" : ""}
                >
                  {typePizza[index]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes?.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => setActiveSize(index)}
                  className={activeSize === index ? "active" : ""}
                >
                  {item} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button
            id={id.toString()}
            onClick={(e) => onClickAdd(e)}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
