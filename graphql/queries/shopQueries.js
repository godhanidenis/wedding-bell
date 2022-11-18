import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getShops = async (payload) => {
  const results = await client.query({
    query: gql`
      query ShopList(
        $area: [String]
        $sort: String
        $pageData: paginationInput
      ) {
        shopList(area: $area, sort: $sort, pageData: $pageData) {
          count
          limit
          noOfPages
          data {
            id
            user_id
            shop_name
            shop_logo
            shop_cover_image
            shop_images {
              links
            }
            shop_video
            shop_type
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
            shop_review {
              id
              shop_id
              user_id
              stars
              message
              flag
            }
            shop_rating
            branch_info {
              id
              shop_id
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
              shop_info {
                shop_name
              }
            }
          }
        }
      }
    `,
    variables: {
      area: payload.area,
      sort: payload.sort,
      pageData: payload.pageData,
    },
  });

  return results;
};
