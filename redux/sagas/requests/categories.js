import { getCategories } from "../../../graphql/queries/categoriesQueries";

export function requestGetCategories() {
  return getCategories();
}
