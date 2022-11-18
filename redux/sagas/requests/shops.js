import { getShops } from "../../../graphql/queries/shopQueries";

export function requestGetShops(shop) {
  return getShops(shop);
}
