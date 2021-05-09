import {
  REGISTER_CHANGE_USERNAME,
  REGISTER_CHANGE_PASSWORD,
  REGISTER_CHANGE_EMAIL,
  REGISTER_STATUS
} from "../../constants/ActionTypes"
import {apiStatus} from "../../constants/apiStatus";

let initState = {
  username: "",
  password: "",
  email: "",
  fullName: ""
};

export function register(state = initState, action) {
  switch (action.type) {
    case REGISTER_CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case REGISTER_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case REGISTER_CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case REGISTER_STATUS:
      return action.payload.status == apiStatus.SUCCEEDED ? initState : state;
    default:
      return state;
  }
}

let initRegisterStatus = {
  status: apiStatus.NO_LOADING,
  message: ""
}

export function registerStatus(state = initRegisterStatus, action) {
  switch (action.type) {
    case REGISTER_STATUS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message || ""
      }
    default:
      return state;
  }
}
