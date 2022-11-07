export const IS_DAY_SELECTED = "IS_DAY_SELECTED";
export const SAVE_SHOP_TIMETABLE = "SAVE_SHOP_TIMETABLE";
export const EDIT_SINGLE_DAY = "EDIT_SINGLE_DAY";
export const SET_START_TIME = "SET_START_TIME";
export const SET_END_TIME = "SET_END_TIME";
export const IS_TIMETABLE_SET = "IS_TIMETABLE_SET";

export const SET_LOGO = "SET_LOGO";
export const SET_BACKGROUD_IMAGE = "SET_BACKGROUD_IMAGE";
export const SET_MULTIPLE_SHOP_IMAGE = "SET_MULTIPLE_SHOP_IMAGE";
export const SET_MULTIPLE_SHOP_IMAGE_BASE64 = "SET_MULTIPLE_SHOP_IMAGE_BASE64";
export const DELETE_MULTIPLE_SHOP_IMAGE_BASE64 = "DELETE_MULTIPLE_SHOP_IMAGE_BASE64";
export const DELETE_SINGLE_SHOP_IMAGE = "DELETE_SINGLE_SHOP_IMAGE";
export const SET_SHOP_VIDEO = "SET_SHOP_VIDEO";

export const SHOP_REGISTER_START = "SHOP_REGISTER_START";
export const SHOP_REGISTER_SUCCESS = "SHOP_REGISTER_SUCCESS";
export const SHOP_REGISTER_ERROR = "SHOP_REGISTER_ERROR";

export const editSingleDay = (data) => ({
  type: EDIT_SINGLE_DAY,
  payload: data,
});
export const saveTimeTableData = (data) => ({
  type: SAVE_SHOP_TIMETABLE,
  payload: data,
});
export const isDaySelected = (data) => ({
  type: IS_DAY_SELECTED,
  payload: data,
});

export const setLogo = (data) => ({
  type: SET_LOGO,
  payload: data,
});
export const setBackgroundImage = (data) => ({
  type: SET_BACKGROUD_IMAGE,
  payload: data,
});
export const setMultipleShopImage = (data) => ({
  type: SET_MULTIPLE_SHOP_IMAGE,
  payload: data,
});
export const setMultipleShopImageBase64 = (data) => ({
  type: SET_MULTIPLE_SHOP_IMAGE_BASE64,
  payload: data,
});
export const deleteMultipleShopImageBase64 = (data) => ({
  type: DELETE_MULTIPLE_SHOP_IMAGE_BASE64,
  payload: data,
});
export const deleteSingleShopImage = (data) => ({
  type: DELETE_SINGLE_SHOP_IMAGE,
  payload: data,
});
export const setStartTime = (data) => ({
  type: SET_START_TIME,
  payload: data,
});
export const setEndTime = (data) => ({
  type: SET_END_TIME,
  payload: data,
});
export const isTimetableset = (data) => ({
  type: IS_TIMETABLE_SET,
  payload: data,
});
export const setSingleVideo = (data) => ({
  type: SET_SHOP_VIDEO,
  payload: data,
});

export const loadShopRegisterStart = (data) => ({
  type: SHOP_REGISTER_START,
  payload:data,
});

export const loadShopRegisterSuccess = (products) => ({
  type: SHOP_REGISTER_SUCCESS,
  payload: products,
});

export const loadShopRegisterError = (error) => ({
  type: SHOP_REGISTER_ERROR,
  payload: error,
});

const initialState = {
  data: [],
  // TimeTable: [
  //   { Day: "Sunday", val: true, start: "", end: "", isclosed: false },
  //   { Day: "Monday", val: false, start: "", end: "", isclosed: false },
  //   { Day: "Tuseday", val: false, start: "", end: "", isclosed: false },
  //   { Day: "Wednesday", val: false, start: "", end: "", isclosed: false },
  //   { Day: "Thursday", val: false, start: "", end: "", isclosed: false },
  //   { Day: "Friday", val: false, start: "", end: "", isclosed: false },
  //   { Day: "Saturday", val: false, start: "", end: "", isclosed: false },
  // ],
  TimeTable: [
    { week: "Sunday", val: true, open_time: "", close_time: "", is_close: false },
    { week: "Monday", val: false, open_time: "", close_time: "", is_close: false },
    { week: "Tuseday", val: false, open_time: "", close_time: "", is_close: false },
    { week: "Wednesday", val: false, open_time: "", close_time: "", is_close: false },
    { week: "Thursday", val: false, open_time: "", close_time: "", is_close: false },
    { week: "Friday", val: false, open_time: "", close_time: "", is_close: false },
    { week: "Saturday", val: false, open_time: "", close_time: "", is_close: false },
  ],
  isTimeTableSet: false,
  startTime: "",
  endTime: "",
  Logo: "",
  backgroudURL: "",
  shopVideo:"",
  shopImages: [],
  shopImgsBase64:[],
  loading: false,
  error: "",
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DAY_SELECTED:
      let copyData = state.TimeTable;
      copyData[action.payload] = {
        ...copyData[action.payload],
        val: copyData[action.payload].val ? false : true,
      };
      return {
        ...state,
        TimeTable: copyData,
      };

    case SAVE_SHOP_TIMETABLE:
      const saveWeekDays = state.TimeTable;
      saveWeekDays.map((day) => {
        if (action.payload.isClosed === true && day.val) {
          (day.start = ""), (day.end = "");
          day.is_close = true;
        } else if (day.val) {
          (day.open_time = action.payload.startTime),
            (day.close_time = action.payload.endTime);
        }
      });
      return {
        ...state,
        TimeTable: saveWeekDays,
      };
    case EDIT_SINGLE_DAY:
      const singleDay = state.TimeTable;
      singleDay.map((day) => {
        if (action.payload === day.week) {
          day.val = true;
        } else {
          day.val = false;
        }
      });

      return {
        ...state,
        TimeTable: singleDay,
      };

    case SET_LOGO:
      return {
        ...state,
        Logo: action.payload,
      };
    case SET_BACKGROUD_IMAGE:
      return {
        ...state,
        backgroudURL: action.payload,
      };
    case SET_MULTIPLE_SHOP_IMAGE:
      return {
        ...state,
        shopImages: [...state.shopImages.concat(action.payload)],
      };
    case SET_MULTIPLE_SHOP_IMAGE_BASE64:
      return {
        ...state,
        shopImgsBase64: [...state.shopImgsBase64.concat(action.payload)],
      };
    case DELETE_MULTIPLE_SHOP_IMAGE_BASE64:
      return {
        ...state,
        shopImgsBase64:  state.shopImgsBase64.filter(
          (data, index) => index !== action.payload
        ),
      };
    case DELETE_SINGLE_SHOP_IMAGE:
      return {
        ...state,
        shopImages: state.shopImages.filter(
          (data, index) => index !== action.payload
        ),
      };
    case SET_START_TIME:
      return {
        ...state,
        startTime: action.payload,
      };

    case SET_END_TIME:
      return {
        ...state,
        endTime: action.payload,
      };
    case SET_SHOP_VIDEO:
      return {
        ...state,
        shopVideo: action.payload,
      };
    case IS_TIMETABLE_SET:
      return {
        ...state,
        isTimeTableSet: action.payload,
      };

    case SHOP_REGISTER_START:
      return {
        ...state,
        loading: true,
      };

    case SHOP_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case SHOP_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
