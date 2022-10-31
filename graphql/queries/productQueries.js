import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getProducts = async (payload) => {
  console.log("payyy", payload);
  const result = await client.query({
    query: gql`
      query ProductList(
        $pageData: paginationInput!
        $search: String
        $filter: productFilterInput
        $pinCode: String
        $sort: String
      ) {
        productList(
          pageData: $pageData
          search: $search
          filter: $filter
          pinCode: $pinCode
          sort: $sort
        ) {
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
              shop_id
              shop_info {
                id
                user_id
                shop_logo
                shop_cover_image
                shop_images {
                  links
                }
                shop_video
                is_live
                flag
                form_steps
                shop_social_link {
                  facebook
                  instagram
                  website
                }
                shopFollowerCount
              }
              branch_name
              branch_address
              branch_pinCode
              manager_name
              manager_contact
              branch_time {
                week
                open_time
                close_time
                is_close
              }
              branch_type
              flag
            }
            flag
            productLikes
            productViews
          }
          count
          limit
          noOfPages
        }
      }
    `,
    variables: {
      search: payload.search,
      pageData: payload.pageData,
      filter: payload.filter,
      pinCode: payload.pinCode,
      sort: payload.sort,
    },
  });

  return result;
};
