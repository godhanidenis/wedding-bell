export const LOAD_SHOP_START = "LOAD_SHOP_START";
export const LOAD_SHOP_SUCCESS = "LOAD_SHOP_SUCCESS";
export const LOAD_SHOP_ERROR = "LOAD_SHOP_ERROR";

export const loadShopsStart = () => ({
  type: LOAD_SHOP_START,
});

export const loadShopsSuccess = (shops) => ({
  type: LOAD_SHOP_SUCCESS,
  payload: shops,
});

export const loadShopsError = (error) => ({
  type: LOAD_SHOP_ERROR,
  payload: error,
});

const initialState = {
  shops: [],
  loading: false,
  error: "",
};

const shopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOP_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_SHOP_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload,
      };

    case LOAD_SHOP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shopsReducer;
