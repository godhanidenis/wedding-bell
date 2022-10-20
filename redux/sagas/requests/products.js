import { getProducts } from "../../../graphql/queries/productQueries";

export function requestGetProducts(product) {
  return getProducts(product);
}
