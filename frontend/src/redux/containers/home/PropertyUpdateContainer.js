import {connect} from 'react-redux'

import {home} from "../../actions";

import PropertyUpdate from "../../components/home/PropertyUpdate";

const mapStateToProps = state => ({
  propertyUpdateState: state.propertyUpdate
})

export default connect(
    mapStateToProps,
    home.propertyUpdate
)(PropertyUpdate)