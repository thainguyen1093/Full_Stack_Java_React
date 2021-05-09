import {ActionTypes} from "../../constants";
import React from "react";

let initState = {
  name: "",
  status: "",
  currentImages: [], // list of string name
  images: [],
};

export function propertyUpdate(state = initState, action) {
  switch (action.type) {
    case ActionTypes.PROPERTY_UPDATE_FIND_BY_ID_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.PROPERTY_UPDATE_CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ActionTypes.PROPERTY_UPDATE_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case ActionTypes.PROPERTY_UPDATE_CHANGE_IMAGES:
      if (action.payload && action.payload.length > 0) {
        let images = [];
        for (let i = 0; i < action.payload.length; i++) {
          images.push(action.payload[i]);
        }
        return {
          ...state,
          images: images
        };
      } else {
        return state;
      }
    case ActionTypes.PROPERTY_CREATE_LEAVE:
      return initState;
    default:
      return state;
  }
}