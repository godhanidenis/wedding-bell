import { gql } from "@apollo/client";
import client from "../apollo-client";

export const getShops = async () => {
  const results = await client.query({
    query: gql`
      query ShopList {
        shopList {
          shop_video
          shop_logo
          is_live
          user_id
          flag
          id
          shop_cover_image
          shop_images {
            links
          }
          form_steps
        }
      }
    `,
  });

  return results;
};
