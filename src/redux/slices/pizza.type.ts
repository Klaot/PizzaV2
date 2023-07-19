export interface IPizzaCart {
  items: IPizza[] | [] | any;
  totalPrice: number;
  count?: number;
}

export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes?: number[];
  price?: number;
  category?: number;
  rating?: number;
  count?: number;
}
