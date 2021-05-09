import {common as commonService} from "../../general/services";

import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT,} from "../constants/ActionTypes";

const initEmptyState = {
  id: undefined,
  username: "",
  email: "",
  accessToken: "",
  roles: [],
}

// user auth use inside redux
const userInCache = commonService.localStorageService.getUser();

const initialState = userInCache || initEmptyState;

export function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_FAIL:
      return initEmptyState;
    case LOGOUT:
      return initEmptyState;
    default:
      return state;
  }
}