import {connect} from 'react-redux'

import {newAction} from "../../../actions";
import EnterSecurityCode from "../../../components/new/forgotPassword/EnterSecurityCode";

const mapStateToProps = state => ({
  forgotPasswordState: state.forgotPassword,
})

export default connect(
    mapStateToProps,
    newAction.forgotPassword.enterSecurityCode
)(EnterSecurityCode)