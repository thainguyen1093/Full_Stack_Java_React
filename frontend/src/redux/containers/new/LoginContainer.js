import {connect} from 'react-redux'

import {newAction} from "../../actions";

import Login from "../../components/new/login/Login";
import {common as commonService} from "../../../general/services";

const mapStateToProps = state => ({
  isAuth: commonService.cheatService.isAuth(),
  authState: state.auth,
  loginState: state.login,
  statusState: state.loginStatus
})

export default connect(
    mapStateToProps,
    newAction.login
)(Login)