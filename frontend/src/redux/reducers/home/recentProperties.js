import {ActionTypes} from "../../constants";

let initState = [];

export function recentProperties(state = initState, action) {
  switch (action.type) {

    case ActionTypes.RECENT_PROPERTIES_GET_SUCCESS:
      return action.payload;
    case ActionTypes.HOME_PAGE_LEAVE:
      return initState;
    default:
      return state;
  }
}