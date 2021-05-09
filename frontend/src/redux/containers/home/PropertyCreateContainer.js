import {connect} from 'react-redux'

import {home} from "../../actions";

import PropertyCreate from "../../components/home/PropertyCreate";

const mapStateToProps = state => ({
  propertyCreateState: state.propertyCreate
})

export default connect(
    mapStateToProps,
    home.propertyCreate
)(PropertyCreate)