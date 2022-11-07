import { gql } from "@apollo/client";

export const REGISTER_SHOP_MUTATION = gql`
  mutation createShop(
    $ownerInfo: updateUserInput!
    $shopInfo: createShopInput!
    $branchInfo: [branchInput]
  ) {
    createShop(
      ownerInfo: $ownerInfo
      shopInfo: $shopInfo
      branchInfo: $branchInfo
    ) {
      ownerInfo {
        id
        first_name
        last_name
        user_email
        user_contact
        user_password
        user_type
        flag
      }
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
  }
`;
// export const REGISTER_SHOP_MUTATION = gql`
//   mutation createShop(
//     $ownerInfo:{
//         id: ID
//         first_name: String
//         last_name: String
//         ser_email: String
//         user_contact: String
//     }
//     $shopInfo:  {
//         id: ID
//                   user_id: String
//                   is_live: String
//                   flag: String
//                   form_steps: String
//                   shop_video:String
//                   shop_social_link:{
//                     facebook :""
//                     instagram: ""
//                     website: ""
//                   }
//     }
//     $branchInfo:[]
//     )
//     {
//     createShop(
//         objects:[{
//         ownerInfo:$ownerInfo,
//         shopInfo:$shopInfo,
//         branchInfo:$branchInfo}]

//     ){
//         ownerInfo {
//           id
//           first_name
//           last_name
//           user_email
//           user_contact
//           user_password
//           user_type
//           flag
//         }
//         shopInfo {
//           id
//           user_id
//           shop_logo
//           shop_cover_image
//           shop_images {
//             links
//           }
//           shop_video
//           is_live
//           flag
//           form_steps
//           shop_social_link {
//             facebook
//             instagram
//             website
//           }
//           shopFollowerCount
//           shopReviewCount
//           shop_review {
//             id
//             shop_id
//             user_id
//             stars
//             message
//             flag
//           }
//           shop_rating
//           branch_info {
//             id
//             shop_id
//             branch_name
//             branch_address
//             branch_pinCode
//             manager_name
//             manager_contact
//             branch_time {
//               week
//               open_time
//               close_time
//               is_close
//             }
//             branch_type
//             flag
//           }
//         }
//       }

//   }
// `;
