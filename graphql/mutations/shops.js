import { gql } from "@apollo/client";
import client from "../apollo-client";

export const shopFollow = async (payload) => {
  const results = await client.mutate({
    mutation: gql`
      mutation ShopFollower($shopInfo: shopFollowerInput) {
        shopFollower(shopInfo: $shopInfo) {
          data {
            shop_id
            user_id
          }
          message
        }
      }
    `,
    variables: {
      shopInfo: payload.shopInfo,
    },
  });
  return results;
};

export const shopReview = async (payload) => {
  const results = await client.mutate({
    mutation: gql`
      mutation CreateShopReview($shopInfo: ShopReviewInput) {
        createShopReview(shopInfo: $shopInfo) {
          id
          shop_id
          user_id
          stars
          message
          flag
          user_name
          user_type
        }
      }
    `,
    variables: {
      shopInfo: payload.shopInfo,
    },
  });
  return results;
};
