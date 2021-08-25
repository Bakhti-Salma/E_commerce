import {
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    
  } from "../constants/actionTypes";
  import axios from "axios";
  export const login = (data) => async (dispatch) => {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        data,
        config
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
        payload: err,
      });
    }
  };