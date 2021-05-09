/**
 * This service using to logging by config to avoid flood logging in console
 * */
import * as configService from './configService';

export function log(){
  if (configService.isAllowConsoleLog()){
    console.log(arguments);
  }
}

export function error(){
  if (configService.isAllowConsoleLog()){
    console.error(arguments);
  }
}