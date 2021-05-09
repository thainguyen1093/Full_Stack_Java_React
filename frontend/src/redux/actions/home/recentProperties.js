import {ActionTypes} from "../../constants";

import {productService} from "../../../general/services";


const findRecentPropertiesSuccess = (recentProperties) => ({
  type: ActionTypes.RECENT_PROPERTIES_GET_SUCCESS,
  payload: recentProperties
})

export const doFindRecentProperties = () => (dispatch, getState) => {
  const {recentProperties} = getState();

  return productService.search()
  .then(response => {

    let data = response.data;

    dispatch(findRecentPropertiesSuccess(data && data.element));
  })
}
