import {forgotPasswordType} from "../../../constants";


import {common as commonService, forgotPassword as forgotPasswordService} from "../../../../general/services";
import {toast} from "react-toastify";


export const changeNewPassword = event => ({
  type: forgotPasswordType.FORGOT_PASSWORD_CHANGE_NEW_PASSWORD,
  payload: event.target.value
})

export const changeVerifyPassword = event => ({
  type: forgotPasswordType.FORGOT_PASSWORD_CHANGE_VERIFY_PASSWORD,
  payload: event.target.value
})

const newPasswordSuccess = () => ({
  type: forgotPasswordType.FORGOT_PASSWORD_NEW_PASSWORD_SUCCESS,
})

export const doNewPassword = () => (dispatch, getState) => {
  const {forgotPassword} = getState();

  return forgotPasswordService.forgotPasswordService.newPassword({
    id: forgotPassword.id,
    verificationCode: forgotPassword.verificationCode,
    newPassword: forgotPassword.newPassword
  }).then(response => {

    toast.success("doNewPassword Success");
    dispatch(newPasswordSuccess());
  }).catch(error => {
    commonService.consoleLogService.error(error);
    toast.error("doNewPassword Fail");
  });
}
