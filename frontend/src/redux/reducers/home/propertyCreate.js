import {ActionTypes} from "../../constants";
import React from "react";

let initState = {
  name: "",
  status: "",
  images: []
};

export function propertyCreate(state = initState, action) {
  switch (action.type) {
    case ActionTypes.PROPERTY_CREATE_CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case ActionTypes.PROPERTY_CREATE_CHANGE_STATUS:
      return {
        ...state,
        status: action.payload
      };
    case ActionTypes.PROPERTY_CREATE_CHANGE_IMAGES:
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