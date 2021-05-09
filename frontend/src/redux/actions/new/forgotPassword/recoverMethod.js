import {forgotPasswordType} from "../../../constants";

import {common as commonService, forgotPassword as forgotPasswordService} from "../../../../general/services";
import {toast} from "react-toastify";

export const changeRecoverMethod = event => ({
  type: forgotPasswordType.FORGOT_PASSWORD_CHANGE_RECOVER_METHOD,
  payload: event.target.value
})

const recoverMethodSuccess = () => ({
  type: forgotPasswordType.FORGOT_PASSWORD_SENT_VERIFICATION_CODE,
})

export const doRecoverMethod = () => (dispatch, getState) => {
  const {forgotPassword} = getState();

  return forgotPasswordService.forgotPasswordService.sendCode({
    id: forgotPassword.id,
    recoverMethod: forgotPassword.recoverMethod
  }).then(response => {

    toast.success("recoverMethod Success");
    dispatch(recoverMethodSuccess());
  }).catch(error => {
    commonService.consoleLogService.error(error);
    toast.error("recoverMethod Fail");
  });
}
