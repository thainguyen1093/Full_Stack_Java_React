import {connect} from 'react-redux'

import {newAction} from "../../../actions";
import NewPassword from "../../../components/new/forgotPassword/NewPassword";

const mapStateToProps = state => ({
  forgotPasswordState: state.forgotPassword,
})

export default connect(
    mapStateToProps,
    newAction.forgotPassword.newPassword
)(NewPassword)