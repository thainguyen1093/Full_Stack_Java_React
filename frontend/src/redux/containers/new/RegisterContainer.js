import {connect} from 'react-redux'

import {newAction} from "../../actions";

import Register from "../../components/new/Register";

const mapStateToProps = state => ({
  registerState: state.register,
  statusState: state.registerStatus
})

export default connect(
    mapStateToProps,
    newAction.register
)(Register)