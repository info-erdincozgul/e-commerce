import {
  SET_ROLES,
  SET_LANGUAGE,
  SET_THEME,
  SET_USER,
} from "../actions/ClientAction";

const initialLanguage = localStorage.getItem("lang") || "en";
const initialTheme = localStorage.getItem("theme") === "true";

const initialState = {
  language: initialLanguage,
  theme: initialTheme,
  user: {
    userInfo: {
      name: null,
      email: null,
      token: "",
    },
    addressList: {},
    creditCards: {},
  },
  roles: {},
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { ...state.user, userInfo: action.payload },
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
