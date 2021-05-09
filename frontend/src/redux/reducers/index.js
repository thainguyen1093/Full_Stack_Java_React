import {combineReducers} from 'redux'
import {login, loginStatus} from './new/login'
import {register, registerStatus} from "./new/register";
import {forgotPassword} from "./new/forgotPassword/forgotPassword";
import {auth} from './auth'
import {recentProperties} from "./home/recentProperties";
import {propertyView} from "./home/propertyView";
import {propertyCreate} from "./home/propertyCreate";
import {propertyUpdate} from "./home/propertyUpdate";

const rootReducer = combineReducers({
  auth,
  login,
  loginStatus,
  register,
  registerStatus,
  forgotPassword,
  recentProperties,
  propertyView,
  propertyCreate,
  propertyUpdate,
})

export default rootReducer