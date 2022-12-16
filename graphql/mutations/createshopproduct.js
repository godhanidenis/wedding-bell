import { gql } from "@apollo/client";
import client from "../apollo-client";

export const createProductforshop = async (payload) => {

  const results = await client.mutate({
    mutation: gql`
    mutation CreateProduct($productInfo: [createProductInput]) {
      createProduct(productInfo: $productInfo) {
        product_name
        product_description
        product_color
        product_image {
          front
          back
          side
        }
      }
    }
    
  `,
    variables: {
      productInfo: payload.shopPorduct,
    },
  })
  return results;
}
