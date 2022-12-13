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

export const shopRegistration = async (payload) => {
  const results = await client.mutate({
    mutation: gql`
      mutation CreateShop(
        $ownerInfo: updateUserInput
        $shopInfo: createShopInput
        $branchInfo: [branchInput]
      ) {
        createShop(
          ownerInfo: $ownerInfo
          shopInfo: $shopInfo
          branchInfo: $branchInfo
        ) {
          branchInfo {
            branch_address
            branch_pinCode
            branch_time {
              week
              open_time
              close_time
              is_close
              is_24Hours_open
            }
            branch_type
            flag
            id
            manager_contact
            manager_name
            product_info {
              id
              product_name
              product_description
              product_image {
                front
                back
                side
              }
              product_video
              product_color
              categoryInfo {
                id
                category_name
                category_type
                flag
              }
              branchInfo {
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
                  is_24Hours_open
                }
                branch_type
                flag
              }
              flag
              productLikes
            }
            shop_id
          }
          ownerInfo {
            first_name
            flag
            id
            last_name
            product_like_list {
              id
              product_name
              product_description
              product_image {
                front
                back
                side
              }
              product_video
              product_color
              categoryInfo {
                id
                category_name
                category_type
                flag
              }
              flag
              productLikes
            }
            shop_follower_list {
              shop_id
              user_id
            }
            shop_review_list {
              id
              shop_id
              user_id
              user_name
              user_type
              stars
              message
              flag
            }
            user_contact
            user_email
            user_password
            user_type
          }
          shopInfo {
            flag
            form_steps
            id
            is_live
            shopFollowerCount
            shopReviewCount
            shop_cover_image
            shop_images {
              links
            }
            shop_logo
            shop_name
            shop_rating
            shop_review {
              id
              shop_id
              user_id
              user_name
              user_type
              stars
              message
              flag
            }
            shop_social_link {
              facebook
              instagram
              website
            }
            shop_type
            shop_video
            user_id
          }
          message
        }
      }
    `,
    variables: {
      ownerInfo: payload.ownerInfo,
      shopInfo: payload.shopInfo,
      branchInfo: payload.branchInfo,
    },
  });
  return results;
};
