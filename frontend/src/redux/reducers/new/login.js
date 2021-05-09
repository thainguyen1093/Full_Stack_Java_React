import {
  LOGIN_CHANGE_USERNAME,
  LOGIN_CHANGE_PASSWORD,
  LOGIN_CHANGE_REMEMBER_ME,
  LOGIN_STATUS,
} from "../../constants/ActionTypes"

import {apiStatus} from "../../constants/apiStatus";

const initialState = {
  username: "",
  password: "",
  rememberMe: false,
}

export function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case LOGIN_CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    case LOGIN_CHANGE_REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.payload
      }
    case LOGIN_STATUS:
      return action.payload.status == apiStatus.SUCCEEDED ? initialState : state;
    default:
      return state;
  }
}

let initLoginStatus = {
  status: apiStatus.NO_LOADING,
  message: ""
}

export function loginStatus(state = initLoginStatus, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message
      }
    default:
      return state;
  }
}
