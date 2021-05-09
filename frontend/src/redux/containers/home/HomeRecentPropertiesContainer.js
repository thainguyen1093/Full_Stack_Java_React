import {connect} from 'react-redux'

import {home} from "../../actions";

import HomeRecentProperties from "../../components/home/HomeRecentProperties";

const mapStateToProps = state => ({
  recentProperties: state.recentProperties
})

export default connect(
    mapStateToProps,
    home.recentProperties
)(HomeRecentProperties)