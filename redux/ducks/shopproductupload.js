export const UPLOAD_SHOP_PRODUCT_START = "UPLOAD_SHOP_PRODUCT_START";
export const UPLOAD_SHOP_PRODUCT_SUCCESS = "UPLOAD_SHOP_PRODUCT_SUCCESS";
export const UPLOAD_SHOP_PRODUCT_ERROR = "UPLOAD_SHOP_PRODUCT_ERROR";


export const uploadshopProductStart = (shopPorduct) => ({
  type: UPLOAD_SHOP_PRODUCT_START,
  payload: shopPorduct
});

export const uploadshopProductSuccess = (shopPorduct) => ({
  type: UPLOAD_SHOP_PRODUCT_SUCCESS,
  payload: shopPorduct
});

export const uploadshopProductError = (error) => ({
  type: UPLOAD_SHOP_PRODUCT_ERROR,
  payload: error,
});


const initialState = {
  shopProduct: [],
  loading: false,
  error: "",
};

const shopProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_SHOP_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };

    case UPLOAD_SHOP_PRODUCT_SUCCESS:
      console.log("action.payload", action.payload)
      return {
        ...state,
        loading: false,
        shopProduct: [...state.shopProduct, action.payload],
      };
    case UPLOAD_SHOP_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default shopProductReducer;
