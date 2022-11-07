import { gql } from "@apollo/client";
import client from "../apollo-client";

export const ShopRegister = async (payload) => {
  // const arrTime = payload?.TimeTable.map((data) => {
  //   delete data.val;
  //   return data;
  // });

  console.log("????????????", payload);

  const results = await client.mutate({
    mutation: gql`
      mutation CreateShop(
        $ownerInfo: updateUserInput!
        $shopInfo: createShopInput!
        $branchInfo: [branchInput]
      ) {
        createShop(
          ownerInfo: $ownerInfo
          shopInfo: $shopInfo
          branchInfo: $branchInfo
        ) {
          shopInfo {
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
            shop_review {
              id
              shop_id
              user_id
              stars
              message
              flag
            }
            shop_rating
          }
          branchInfo {
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
    variables: {
      ownerInfo: payload.ownerInfo,
      shopInfo: payload.shopInfo,
      branchInfo: payload.branchInfo,
    },
  });

  return results;
};
