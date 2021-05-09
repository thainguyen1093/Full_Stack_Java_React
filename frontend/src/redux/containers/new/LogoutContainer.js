import {connect} from 'react-redux'

import {newAction} from "../../actions";

import Logout from "../../components/new/Logout";

export default connect(
    null,
    newAction.logout
)(Logout)