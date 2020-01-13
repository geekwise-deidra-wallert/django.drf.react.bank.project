import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types";

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
        permissions: JSON.parse(localStorage.getItem("permissions"))
      };
    case USER_LOADED:
      console.log("Loaded user: " + Object.keys(action.payload));
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      console.log("Logged-in user: " + action.payload.permissions);
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem(
        "permissions",
        JSON.stringify(action.payload.permissions)
      );
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      console.log("Logged-out user");
      localStorage.removeItem("token");
      localStorage.removeItem("permissions");
      return {
        ...state,
        token: null,
        permissions: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };

    default:
      return state;
  }
};

export default authReducer;
