import {toast} from "react-toastify";

import {authService, common as commonService} from "../../../general/services";

import * as api from "../../../general/services/api";

import {
  LOGIN_CHANGE_PASSWORD,
  LOGIN_CHANGE_REMEMBER_ME,
  LOGIN_CHANGE_USERNAME,
  LOGIN_FAIL,
  LOGIN_STATUS,
  LOGIN_SUCCESS,
} from "../../constants/ActionTypes";
import * as commonApiStatus from "../common/commonApiStatus"

export const changeUsername = event => ({
  type: LOGIN_CHANGE_USERNAME,
  payload: event.target.value
})

export const changePassword = event => ({
  type: LOGIN_CHANGE_PASSWORD,
  payload: event.target.value
})

export const changeRememberMe = event => ({
  type: LOGIN_CHANGE_REMEMBER_ME,
  payload: event.target.checked
})

export const noLoading = () => commonApiStatus.noLoading(LOGIN_STATUS, "Login");

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: {
    id: user.id,
    username: user.username,
    email: user.email,
    accessToken: user.accessToken,
    roles: user.roles
  }
})

const loginFail = (error) => ({
  type: LOGIN_FAIL,
})

export const doLogin = () => (dispatch, getState) => {
  const {username, password, rememberMe} = getState().login;
  dispatch(commonApiStatus.loading(LOGIN_STATUS, "Login"));

  return authService.login({username, password})
  .then(response => {
    let user = response.data;
    if (user.accessToken) {
      if (rememberMe) {
        commonService.localStorageService.setUser(user);// add user in cache
      }

      toast.success("Login success");
    }

    dispatch(commonApiStatus.success(LOGIN_STATUS, "Login"));

    api.updateUserAuth(user); // update user in api
    dispatch(loginSuccess(user)); // add user auth to redux store
    return user;
  })
  .catch(error => {
    commonService.consoleLogService.error(error);
    toast.error("Login Fail");

    dispatch(commonApiStatus.fail(LOGIN_STATUS, "Login"));

    commonService.localStorageService.removeUser(); // remove user in cache
    api.removeUserAuth(); // remove user in api
    dispatch(loginFail(error)); // remove user in redux store
  });
}