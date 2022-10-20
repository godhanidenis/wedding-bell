export const LOAD_CATEGORY_START = "LOAD_CATEGORY_START";
export const LOAD_CATEGORY_SUCCESS = "LOAD_CATEGORY_SUCCESS";
export const LOAD_CATEGORY_ERROR = "LOAD_CATEGORY_ERROR";

export const loadCategoriesStart = () => ({
  type: LOAD_CATEGORY_START,
});

export const loadCategoriesSuccess = (categories) => ({
  type: LOAD_CATEGORY_SUCCESS,
  payload: categories,
});

export const loadCategoriesError = (error) => ({
  type: LOAD_CATEGORY_ERROR,
  payload: error,
});

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case LOAD_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
