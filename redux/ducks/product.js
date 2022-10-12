export const LOAD_PRODUCT_START = "LOAD_PRODUCT_START";
export const LOAD_PRODUCT_SUCCESS = "LOAD_PRODUCT_SUCCESS";
export const LOAD_PRODUCT_ERROR = "LOAD_PRODUCT_ERROR";

export const loadProductsStart = () => ({
  type: LOAD_PRODUCT_START,
});

export const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCT_SUCCESS,
  payload: products,
});

export const loadProductsError = (error) => ({
  type: LOAD_PRODUCT_ERROR,
  payload: error,
});

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case LOAD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
