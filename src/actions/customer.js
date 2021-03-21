import axios from "axios";
import { OCAlert } from "@opuscapita/react-alerts";
import { Redirect } from "react-router-dom";

import {
  CUSTOMER_LOADING,
  CUSTOMER_SAVED,
  CUSTOMER_ERROR,
  CODE_REQUEST_SENT,
  CODE_VERIFIED,
  CODE_ERROR,
  GET_CUSTOMERS,
  CUSTOMER_FOUND,
  CUSTOMER_UPDATED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "./type";

const BASE_URL =
  process.env.NODE_ENV == "production"
    ? "https://sutygonbackend.herokuapp.com"
    : "http://localhost:5000";
export const login = (username, password) => async (getState, dispatch) => {
  dispatch({
    type: LOGIN_LOADING,
  });
  const config = { headers: { "Content-Type": "application/json" } };
  const body = JSON.stringify({ username, password });
  try {
    const res = await axios.post(
      `${BASE_URL}/api/customers/login`,
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err.response) {
      const errors = err.response.data.errors;
    }
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

// Add new online customer
export const addNewCustomer = (customer) => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(customer);
  try {
   const res = await axios.post(`${BASE_URL}/api/customers/add`, body, config);

    dispatch({
      type: CUSTOMER_SAVED,
      payload: res.data,
    });
    OCAlert.alertSuccess("Account details saved successfully", {
      timeOut: 3000,
    });
  } 
 
    
catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(console.log(error.msg, "danger")));
    }
    dispatch({
      type: CUSTOMER_ERROR,
    });
  }
};

// get All customer
export const getAllCustomers = () => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });
  try {
    const res = await axios.get(`${BASE_URL}/api/customers`);

    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: err.response,
    });
  }
};
//send verification code request
export const sendCodeRequest = (phonenumber) => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${BASE_URL}/api/verify/getcode?phonenumber=${phonenumber}`,
      config
    );

    dispatch({
      type: CODE_REQUEST_SENT,
      payload: res.data,
    });
    if (res.data.status == "pending") {
      OCAlert.alertSuccess("Code sent!", {
        timeOut: 3000,
      });
    }
  } catch (err) {
    dispatch({
      type: CODE_ERROR,
      payload: err.response,
    });
    if (err.response && err.response.status && err.response.status == "500") {
      const errCode =
        err.response &&
        err.response.data.errors &&
        err.response.data.errors.code;
      if (errCode == "60200") {
        OCAlert.alertError("Invalid Number", {
          timeOut: 3000,
        });
      } else if (errCode == "60203") {
        OCAlert.alertError(
          "You have attempted to send the verification code more than 5 times and have reached the limit.",
          {
            timeOut: 3000,
          }
        );
      } else {
        OCAlert.alertError("Server Error. Please try again later.", {
          timeOut: 3000,
        });
      }
    }
  }
};

// check if there is customer exist with entered number
export const getCustomer = (number) => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });

  try {
    const res = await axios.get(`${BASE_URL}/api/customers/search/${number}`);
    dispatch({
      type: CUSTOMER_FOUND,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: err.response,
    });
  }
};

//send verify code request
export const verifyCode = (code, phonenumber) => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${BASE_URL}/api/verify/verifycode?phonenumber=${phonenumber}&code=${code}`,
      config
    );

    dispatch({
      type: CODE_VERIFIED,
      payload: res.data,
    });
    if (res.data) {
      if (res.data.valid) {
        OCAlert.alertSuccess("Code Verified!", {
          timeOut: 3000,
        });
      }
    } else if (!res.data.valid) {
      OCAlert.alertError("Resend Code", {
        timeOut: 3000,
      });
    }
  } catch (err) {
    dispatch({
      type: CODE_VERIFIED,
      payload: err.response,
    });
    if (err.response && err.response.status && err.response.status == "500") {
      const errCode =
        err.response &&
        err.response.data.errors &&
        err.response.data.errors.code;
      if (errCode == "20404") {
        OCAlert.alertError("Try Again", {
          timeOut: 3000,
        });
      } else {
        OCAlert.alertError("Server Error. Please try again later.", {
          timeOut: 3000,
        });
      }
    }
  }
};

// Update User
export const updateCustomer = (customer, id) => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(customer);
  try {
    const res = await axios.post(
      `${BASE_URL}/api/customers/${id}`,
      body,
      config
    );

    dispatch({
      type: CUSTOMER_UPDATED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CUSTOMER_ERROR,
    });
  }
};
