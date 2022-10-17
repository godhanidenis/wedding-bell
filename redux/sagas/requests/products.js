import { getProducts } from "../../../graphql/queries/productQueries";
import { getShops } from "../../../graphql/queries/shopQueries";

export function requestGetProducts(product) {
  console.log("first", product);
  return getProducts(product);
}

export function requestGetShops() {
  return getShops();
}
