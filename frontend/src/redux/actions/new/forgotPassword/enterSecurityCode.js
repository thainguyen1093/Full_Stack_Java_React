import {forgotPasswordType} from "../../../constants";

import {common as commonService, forgotPassword as forgotPasswordService} from "../../../../general/services";
import {toast} from "react-toastify";


export const changeVerificationCode = event => ({
  type: forgotPasswordType.FORGOT_PASSWORD_CHANGE_VERIFICATION_CODE,
  payload: event.target.value
})

const verifyCodeSuccess = () => ({
  type: forgotPasswordType.FORGOT_PASSWORD_VERIFY_CODE_SUCCESS,
})

export const doVerifyCode = () => (dispatch, getState) => {
  const {forgotPassword} = getState();

  return forgotPasswordService.forgotPasswordService.verifyCode({
    id: forgotPassword.id,
    verificationCode: forgotPassword.verificationCode
  }).then(response => {

    toast.success("verifyCode Success");
    dispatch(verifyCodeSuccess());
  }).catch(error => {
    commonService.consoleLogService.error(error);
    toast.error("verifyCode Fail");
  });
}
