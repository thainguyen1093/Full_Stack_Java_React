import {LOGOUT} from "../../constants/ActionTypes";

import {common as commonService} from "../../../general/services";

import * as api from "../../../general/services/api";

const logout = () => ({
  type: LOGOUT
})

export const doLogout = () => (dispatch, getState) => {
  commonService.localStorageService.removeUser(); // remove user in cache
  api.removeUserAuth(); // remove user in api
  dispatch(logout()); // remove user in redux store
}