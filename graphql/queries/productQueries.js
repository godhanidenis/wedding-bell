import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getProducts = async (payload) => {
  const result = await client.query({
    query: gql`
      query ProductList(
        $search: String
        $pageData: paginationInput!
        $filter: productFilterInput
      ) {
        productList(search: $search, pageData: $pageData, filter: $filter) {
          data {
            id
            product_name
            product_description
            product_image {
              front
              back
              side
            }
            product_video
            categoryInfo {
              id
              category_name
              category_type
              flag
            }
            branchInfo {
              id

              manager_contact
              manager_name
              branch_type
              shop_id
              flag
              branch_name
              branch_address
              branch_pinCode
              branch_time {
                week
                open_time
                close_time
                is_close
              }
            }
            flag
            productLikes
            productViews
          }
          limit
          noOfPages
          count
        }
      }
    `,
    variables: {
      search: payload.search,
      pageData: payload.pageData,
      filter: payload.filter,
    },
  });

  return result;
};
