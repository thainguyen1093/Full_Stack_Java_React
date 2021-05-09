import * as configService from '../common/configService';
import * as consoleLogService from '../common/consoleLogService';
import * as localStorageService from "../common/localStorageService";

import axios from 'axios';
import {methods} from '../../constant/method'

export function search(url, data) {
  return call(methods.GET, url, data);
}

export function getById(url, id) {
  return call(methods.GET, url + `/${id}`);
}

export function create(url, data) {
  return call(methods.POST, url, data);
}

export function update(url, id, data) {
  return call(methods.PUT, url + `/${id}`, data);
}

export function deleteById(url, id) {
  return call(methods.DELETE, url + `/${id}`);
}

export function call(method, url, data) {
  if (!configService.getAllowMethod().includes(method)) {
    consoleLogService.log.error(`The method ${method} is not allow`);
    return;
  }

  let promise;
  switch (method) {
    case methods.GET:
      if (data) {
        promise = axios.get(url, {
          headers: authHeader(),
          params: data
        });
      } else {
        promise = axios.get(url, {headers: authHeader()});
      }
      break;
    case methods.POST:
      promise = axios.post(url, data, {headers: authHeader()})
      break;
    case methods.PUT:
      promise = axios.put(url, data, {headers: authHeader()});
      break;
    case methods.DELETE:
      promise = axios.delete(url, {headers: authHeader()});
      break;
  }

  return promise;
}

// user auth use to call api
let userInCache = localStorageService.getUser() || {};

export function updateUserAuth(newUser = {}) {
  userInCache = {...newUser}
}

export function removeUserAuth() {
  userInCache = {}
}

export function authHeader() {

  if (userInCache && userInCache.accessToken) {
    return {Authorization: 'Bearer ' + userInCache.accessToken};
  }
  return {};
}