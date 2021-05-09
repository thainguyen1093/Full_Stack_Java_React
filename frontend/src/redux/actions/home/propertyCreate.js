import axios from "axios";

import {toast} from "react-toastify";

import {productService} from "../../../general/services";
import {api} from "../../../general/services";

import {ActionTypes} from "../../constants";

export const changeName = event => ({
  type: ActionTypes.PROPERTY_CREATE_CHANGE_NAME,
  payload: event.target.value
})

export const changeStatus = event => ({
  type: ActionTypes.PROPERTY_CREATE_CHANGE_STATUS,
  payload: event.target.value
})


export const changeImages = event => ({
  type: ActionTypes.PROPERTY_CREATE_CHANGE_IMAGES,
  payload: event.target.files
})

const propertyCreateSuccess = () => ({
  type: ActionTypes.PROPERTY_CREATE_SUCCESS,
})

export const doPropertyCreate = () => (dispatch, getState) => {
  const {propertyCreate} = getState();

  const formData = new FormData();
  formData.append('name', propertyCreate.name);
  formData.append('status', propertyCreate.status);
  for (let i = 0; i < propertyCreate.images.length; i++) {
    formData.append(`files`, propertyCreate.images[i]);
  }

  return axios.post(productService.getURL(), formData,
      {
        headers: {
          ...api.authHeader(),
          'Content-Type': 'multipart/form-data'
        }
      })
  .then(response => {
    toast.success("Post Success");
    dispatch(propertyCreateSuccess());
  })
  .catch(error => {
    toast.error("Post Fail");
  });
}

const leavePage = (property) => ({
  type: ActionTypes.PROPERTY_UPDATE_LEAVE
})