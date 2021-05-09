import {forgotPasswordType} from "../../../constants"


let initState = {
  id: "",
  username: "",
  recoverMethod: "",
  verificationCode: "",
  newPassword: "",
  verifyPassword: "",
  step: 1 // current step
};

export function forgotPassword(state = initState, action) {
  switch (action.type) {
    case forgotPasswordType.FORGOT_PASSWORD_CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload
      }
    case forgotPasswordType.FORGOT_PASSWORD_FIND_BY_USERNAME_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        step: 2
      };
    case forgotPasswordType.FORGOT_PASSWORD_CHANGE_RECOVER_METHOD:
      return {
        ...state,
        recoverMethod: action.payload
      }
    case forgotPasswordType.FORGOT_PASSWORD_SENT_VERIFICATION_CODE:
      return {
        ...state,
        step: 3
      }
    case forgotPasswordType.FORGOT_PASSWORD_CHANGE_VERIFICATION_CODE:
      return {
        ...state,
        verificationCode: action.payload
      };
    case forgotPasswordType.FORGOT_PASSWORD_VERIFY_CODE_SUCCESS:
      return {
        ...state,
        step: 4
      };
    case forgotPasswordType.FORGOT_PASSWORD_CHANGE_NEW_PASSWORD:
      return {
        ...state,
        newPassword: action.payload
      };
    case forgotPasswordType.FORGOT_PASSWORD_CHANGE_VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload
      };
    case forgotPasswordType.FORGOT_PASSWORD_NEW_PASSWORD_SUCCESS:
      return initState;
    case forgotPasswordType.FORGOT_PASSWORD_CHANGE_STEP:
      return {
        ...state,
        step: state.step++
      };
    default:
      return state;
  }
}