import {ActionTypes} from "../../constants";
import React from "react";

let initState = {
  name: "",
  status: "",
  images: [],// list of string name
};

export function propertyView(state = initState, action) {
  switch (action.type) {
    case ActionTypes.PROPERTY_VIEW_FIND_BY_ID_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case ActionTypes.PROPERTY_CREATE_LEAVE:
      return initState;
    default:
      return state;
  }
}