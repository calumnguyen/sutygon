import axios from "axios";
import {
  CUSTOMER_LOADING,
  CUSTOMER_SAVED,
  CUSTOMER_ERROR,
  CODE_REQUEST_SENT,
  CODE_VERIFIED,
  CODE_ERROR,
  GET_CUSTOMERS
} from "./type";

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
    const res = await axios.post("https://sutygonbackend.herokuapp.com/api/customers/add", body, config);

    dispatch({
      type: CUSTOMER_SAVED,
    });
  } catch (err) {
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
      const res = await axios.get(`https://sutygonbackend.herokuapp.com/api/customers`);
  
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
    const res =await axios.get(`https://sutygonbackend.herokuapp.com/api/verify/getcode?phonenumber=${phonenumber}`,config);
    dispatch({
      type: CODE_REQUEST_SENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CODE_ERROR,
      payload: err.response,
    });
  }
};

//send verify code request
export const verifyCode = (code,phonenumber) => async (dispatch) => {
  dispatch({ type: CUSTOMER_LOADING });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res =await axios.get(`https://sutygonbackend.herokuapp.com/api/verify/verifycode?phonenumber=${phonenumber}&code=${code}`,config);
    dispatch({
      type: CODE_VERIFIED,
      payload: res.data,

    });
  } catch (err) {
    dispatch({
      type: CODE_VERIFIED,
      payload: err.response,
    });
  }
};
