/**
 * This service using for login/logout or any function like that
 * */

import config from "../config/config.json";
import * as configService from "./common/configService"
import * as localStorageService from "./common/localStorageService";
import * as api from "./api";
import {methods} from "../constant/method";

function getLoginPath() {
  return config.path.auth.login;
}

export function getLoginURL() {
  return configService.getFullURL(getLoginPath());
}

function getLogoutPath() {
  return config.path.auth.logout;
}

export function getLogoutURL() {
  return configService.getFullURL(getLogoutPath());
}

export function login(data) {
  return api.call(methods.POST, getLoginURL(), data);
}

export function logout() {
  localStorageService.removeUser();
}

