import { getShops } from "../../../graphql/queries/shopQueries";

export function requestGetShops() {
  return getShops();
}
