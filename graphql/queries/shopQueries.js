import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getShops = async () => {
  const results = await client.query({
    query: gql`
      query ShopList {
        shopList {
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
          shop_rating
          shop_review {
            id
            shop_id
            user_id
            stars
            message
            flag
          }
          branch_info {
            id
            shop_id
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
        }
      }
    `,
  });

  return results;
};
