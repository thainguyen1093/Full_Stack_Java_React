import config from "../../config/config.json";

import * as configService from "../common/configService";

function getImagePath() {
  return config.path.image.name;
}

export function getDisplayImagePath() {
  return getImagePath() + config.path.image.display;
}

export function buildDisplayImageURL(path) {
  return configService.getFullURL(getDisplayImagePath() + path);
}

export function getDisplayUserImagePath() {
  return getImagePath() + config.path.image.user + config.path.image.display;
}

export function buildDisplayUserImageURL(path) {
  return configService.getFullURL(getDisplayUserImagePath() + path);
}

export function getDisplayUserProductImagePath() {
  return getImagePath() + config.path.image.user + config.path.image.product + config.path.image.display;
}

export function buildDisplayUserProductImageURL(path) {
  return configService.getFullURL(getDisplayUserProductImagePath() + path);
}