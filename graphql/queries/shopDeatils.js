import { gql } from "@apollo/client";
import client from "../apollo-client";

export const shopDetails = async (payload) => {
  const result = await client.query({
    query: gql`
        query Shop($shopId: String) {
          shop(id: $shopId) {
            id
            user_id
            shop_logo
            shop_cover_image
            shopFollowerCount
            shopReviewCount
            shop_rating
            branch_info {
              branch_name
              branch_address
            }
          }
        }
      `,
    variables: {
      shopId: payload.id
    }
  });
  return result;
};
