/**
 * this service using to cheat
 * */
import config from "../../config/config.json";

export function isAuth() {
  return config.cheat.isAuth;
}