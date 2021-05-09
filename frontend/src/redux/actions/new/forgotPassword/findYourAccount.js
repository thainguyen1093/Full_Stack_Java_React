import {forgotPasswordType} from "../../../constants";

import {common as commonService, forgotPassword as forgotPasswordService} from "../../../../general/services";
import {toast} from "react-toastify";


export const changeUsername = event => ({
  type: forgotPasswordType.FORGOT_PASSWORD_CHANGE_USERNAME,
  payload: event.target.value
})

const findYourAccountSuccess = (user) => ({
  type: forgotPasswordType.FORGOT_PASSWORD_FIND_BY_USERNAME_SUCCESS,
  payload: {
    id: user.id,
    userName: user.username
  }
})

export const doFindYourAccount = () => (dispatch, getState) => {
  const {forgotPassword} = getState();

  return forgotPasswordService.forgotPasswordService.findByUsername({username: forgotPassword.username})
  .then(response => {

    let user = response.data;

    toast.success("findYourAccount Success");
    dispatch(findYourAccountSuccess(user));
  })
  .catch(error => {
    commonService.consoleLogService.error(error);
    toast.error("findYourAccount Fail");
  });
}
