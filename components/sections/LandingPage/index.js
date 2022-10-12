import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SINGLE_PRODUCT, LOAD_PRODUCTS } from "../../../graphql/queries";
import DirectoryHero from "../../DirectoryHero/DirectoryHero";
import LandingBg from "../../../assets/landing-page-img.png";

const LandingPage = () => {
  const { data, loading, error } = useQuery(LOAD_PRODUCTS, {
    variables: {
      search: "product",
      pageData: {
        skip: 0,
        limit: 25,
      },
      filter: {
        category_id: "633feae7cad79407b491313c",
        sub_branch_id: "6333e9a8b0aa892200609047",
      },
    },
  });

  const { data: singleProduct } = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      productId: "633ff14a7da4871b1060a9f2",
    },
  });
  console.log("singleProduct", singleProduct);

  console.log("data", data);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data) {
      setProducts(data.productList);
    }
  }, [data]);

  console.log("products", products);

  return (
    <>
      <DirectoryHero bgImg={LandingBg.src} />
      {products.data?.map((product) => (
        <p key={product.id}>{product.product_name}</p>
      ))}
    </>
  );
};

export default LandingPage;
