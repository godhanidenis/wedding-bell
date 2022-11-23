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
