import {ShopRegister} from "../../../graphql/queries/shopRegister";
export function requestPostShopRegister(data) {
    console.log("first", data);
    return ShopRegister(data);
  }
  