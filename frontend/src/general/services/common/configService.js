/**
 * This service connect directly to json config
 * */
import config from '../../config/config.json';

export function getBackEndURL() {
  let backEndConfig = config.backEnd;
  return backEndConfig.domain + ":" + backEndConfig.port;
}

function getPrefix() {
  return config.path.prefix;
}

export function getFullURL(path) {
  return getBackEndURL() + getPrefix() + path;
}

export function getAllowMethod() {
  return config.allowMethod;
}

export function isAllowConsoleLog() {
  return config.allowConsoleLog;
}

