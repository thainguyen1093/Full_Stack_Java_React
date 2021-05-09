import React from 'react';

import {connect} from 'react-redux'

import {common as commonService} from "../../general/services"

import RootRouter from "../components/RootRouter";

const mapStateToProps = state => ({
  auth: state.auth,
  isAuth: commonService.cheatService.isAuth()
})

export default connect(
    mapStateToProps
)(RootRouter)
