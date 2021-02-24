import {
  CUSTOMER_LOADING,
  CUSTOMER_ERROR,
  CUSTOMER_SAVED,
  CODE_REQUEST_SENT,
  CODE_VERIFIED,
  GET_CUSTOMERS,
  CODE_ERROR,CUSTOMER_FOUND,CUSTOMER_UPDATED,LOGIN_LOADING,LOGIN_SUCCESS,LOGIN_FAIL
} from "../actions/type";
const initialState = {
  saved: false,
  customer:null,
  customers: null,
  loading: false,
  saved: false,
  isReqSent: false,
  isCodeVerified: false,
  isCustomerExist: false,
  isLoggedIn:false,
  customer_number:null,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
   case LOGIN_LOADING:
    return {
      ...state,
      loading: true,
      isLoggedIn: false
    };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn:true
      }
    case CUSTOMER_LOADING:
      return {
        ...state,
        loading: true,
        isCustomerExist:false,
        customer:null

      };
case CUSTOMER_FOUND:
  return {
    ...state,
    loading: false,
    customer:payload,
    isCustomerExist:true,
    // isCodeVerified: false,
    // isReqSent: false,
  };
    case CUSTOMER_SAVED:
      return {
        ...state,
        saved: true,
        loading: false,
      };
      case CUSTOMER_UPDATED:
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
        customer_number: payload.to
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
        isCodeVerified: payload && payload.valid,
        isReqSent: false,
      };
    case CODE_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: payload,
          isLoggedIn:false
        }
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
