import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_ERROR
  } from "../constants/actionTypes";
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case LOGIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case AUTH_ERROR:
        localStorage.removeItem("token");
        return {
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: payload,
        };
      default:
        return state;
    }
  }