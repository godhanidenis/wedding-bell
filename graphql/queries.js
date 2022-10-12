import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
  query ProductList(
    $search: String
    $pageData: paginationInput!
    $filter: productFilterInput
  ) {
    productList(search: $search, pageData: $pageData, filter: $filter) {
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
          name
          address
          manager_contact
          manager_name
          branch_type
          shop_id
          flag
        }
        flag
        productLikes
        productViews
      }
      limit
      noOfPages
      count
    }
  }
`;

export const GET_SINGLE_PRODUCT = gql`
  query Product($productId: String) {
    product(id: $productId) {
      data {
        id
        product_name
        product_description
        product_image {
          back
          front
          side
        }
        product_video
        categoryInfo {
          flag
          category_type
          category_name
          id
        }
        branchInfo {
          flag
          shop_id
          id
          address
          name
          manager_contact
          manager_name
          branch_type
        }
        flag
        productLikes
        productViews
      }
      related {
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
          flag
          category_type
          category_name
          id
        }
        branchInfo {
          flag
          shop_id
          manager_name
          manager_contact
          address
          name
          id
          branch_type
        }
        flag
        productLikes
        productViews
      }
    }
  }
`;
