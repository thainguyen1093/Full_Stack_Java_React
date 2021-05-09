import {connect} from 'react-redux'

import {newAction} from "../../../actions";
import RecoverMethod from "../../../components/new/forgotPassword/RecoverMethod";

const mapStateToProps = state => ({
  forgotPasswordState: state.forgotPassword,
})

export default connect(
    mapStateToProps,
    newAction.forgotPassword.recoverMethod
)(RecoverMethod)