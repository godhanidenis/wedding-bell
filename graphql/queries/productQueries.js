import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getProducts = async (payload) => {
  const result = await client.query({
    query: gql`
      query ProductList(
        $pageData: paginationInput!
        $search: String
        $filter: productFilterInput
        $sort: String
        $shopId: [String]
      ) {
        productList(
          pageData: $pageData
          search: $search
          filter: $filter
          sort: $sort
          shop_id: $shopId
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
                shopReviewCount
                shop_name
                shop_rating
                shop_review {
                  id
                  shop_id
                  user_id
                  stars
                  message
                  flag
                }
                shop_type
              }

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
            product_color
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
      shopId: payload.shopId,
      sort: payload.sort,
    },
  });

  return result;
};
