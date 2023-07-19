import axios from "axios";
import { FetchPizzasParams } from "../redux/slices/pizzasSlice";

export const getAllPizzas = async (params: FetchPizzasParams) => {
  try {
    const response = await axios.get(
      `https://kind-blue-chick-garb.cyclic.app/${params?.categoryId}?sortType=${
        params?.sortId
      }&${"search=" + params?.searchValue?.toLowerCase()}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.body.message);
  }
};
