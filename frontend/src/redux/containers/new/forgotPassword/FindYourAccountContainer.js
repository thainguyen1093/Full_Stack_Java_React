import {connect} from 'react-redux'

import {newAction} from "../../../actions";
import FindYourAccount from "../../../components/new/forgotPassword/FindYourAccount";

const mapStateToProps = state => ({
  forgotPasswordState: state.forgotPassword,
})

export default connect(
    mapStateToProps,
    newAction.forgotPassword.findYourAccount
)(FindYourAccount)