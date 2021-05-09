import {connect} from 'react-redux'

import {home} from "../../actions";

import PropertyView from "../../components/home/PropertyView";

const mapStateToProps = state => ({
  propertyViewState: state.propertyView
})

export default connect(
    mapStateToProps,
    home.propertyView
)(PropertyView)