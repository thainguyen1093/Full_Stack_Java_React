import {toast} from "react-toastify";

import {common as commonService, userService} from "../../../general/services";

import {
  REGISTER_CHANGE_EMAIL,
  REGISTER_CHANGE_PASSWORD,
  REGISTER_CHANGE_USERNAME,
  REGISTER_STATUS,
} from "../../constants/ActionTypes";

import * as commonApiStatus from "../common/commonApiStatus"

export const changeUsername = event => ({
  type: REGISTER_CHANGE_USERNAME,
  payload: event.target.value
})

export const changePassword = event => ({
  type: REGISTER_CHANGE_PASSWORD,
  payload: event.target.value
})

export const changeEmail = event => ({
  type: REGISTER_CHANGE_EMAIL,
  payload: event.target.value
})

export const noLoading = () => commonApiStatus.noLoading(REGISTER_STATUS, "Register");

export const doRegister = () => (dispatch, getState) => {
  const {register} = getState();
  dispatch(commonApiStatus.loading(REGISTER_STATUS, "Register"));

  return userService.create(register)
  .then(response => {
    toast.success("Register Success");

    dispatch(commonApiStatus.success(REGISTER_STATUS, "Register"))
  })
  .catch(error => {
    commonService.consoleLogService.error(error);
    toast.error("Register Fail");

    dispatch(commonApiStatus.fail(REGISTER_STATUS, "Register"))
  });
}