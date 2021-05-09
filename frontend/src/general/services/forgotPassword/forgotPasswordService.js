import config from "../../config/config.json";

import * as configService from "../common/configService";
import * as api from "../api";
import {methods} from "../../constant/method";

function getFindByUsernamePath() {
  return config.path.forgotPassword.name + config.path.forgotPassword.findByUsername;
}

export function findByUsername(data) {
  return api.call(methods.GET, configService.getFullURL(getFindByUsernamePath()), data);
}

function getSendCodePath() {
  return config.path.forgotPassword.name + config.path.forgotPassword.sendCode;
}

export function sendCode(data) {
  return api.call(methods.POST, configService.getFullURL(getSendCodePath()), data);
}

function getVerifyCodePath() {
  return config.path.forgotPassword.name + config.path.forgotPassword.verifyCode;
}

export function verifyCode(data) {
  return api.call(methods.GET, configService.getFullURL(getVerifyCodePath()), data);
}

function getNewPasswordPath() {
  return config.path.forgotPassword.name + config.path.forgotPassword.newPassword;
}

export function newPassword(data) {
  return api.call(methods.POST, configService.getFullURL(getNewPasswordPath()), data);
}