import {
  CUSTOMER_LOADING,
  CUSTOMER_ERROR,
  CUSTOMER_SAVED,
  CODE_REQUEST_SENT,
  CODE_VERIFIED,
  GET_CUSTOMERS,
  CODE_ERROR,
} from "../actions/type";
const initialState = {
  saved: false,
  customers: null,
  loading: false,
  saved: false,
  isReqSent: false,
  isCodeVerified: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CUSTOMER_SAVED:
      return {
        ...state,
        saved: true,
        loading: false,
      };
    case CODE_REQUEST_SENT:
      return {
        ...state,
        loading: false,
        isReqSent: payload.status,
        isCodeVerified: false,
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: payload,
        loading: false,
        saved: false,
      };
    case CODE_VERIFIED:
      return {
        ...state,
        loading: false,
        isCodeVerified: payload.valid,
        isReqSent: false,
      };
    case CODE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CUSTOMER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
