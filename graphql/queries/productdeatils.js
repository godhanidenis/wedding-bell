import { gql } from "@apollo/client";
import client from "../apollo-client";

export const productdeatail = async (payload) => {
  const result = await client.query({
    query: gql`
    query Product($productId: String) {
      product(id: $productId) {
        data {
          id
          product_name
          product_description
          branchInfo {
            shop_info {
              shop_logo
            }
            branch_name
            branch_address
            branch_pinCode
            manager_name
            manager_contact
          }
        }
        related {
          id
          product_description
        }
      }
    }
      `,
    variables: {
      productId: payload.id
    }
  });
  return result;
};
