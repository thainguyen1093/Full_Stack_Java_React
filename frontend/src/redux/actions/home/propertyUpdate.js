import axios from "axios";

import {toast} from "react-toastify";

import {
  productService
} from "../../../general/services";
import {api} from "../../../general/services";

import {ActionTypes} from "../../constants";


const propertyFindByIdSuccess = (property) => ({
  type: ActionTypes.PROPERTY_UPDATE_FIND_BY_ID_SUCCESS,
  payload: property
})

export const doPropertyFindById = (id) => (dispatch, getState) => {

  return productService.getById(id)
  .then(response => {

    let data = response.data;

    toast.success("doPropertyFindByIdUpdate Success");

    let property = {};
    property.name = data.name;
    property.status = data.status;
    property.currentImages = data.productImageList?.map(currentImage => currentImage.image) || [];
    dispatch(propertyFindByIdSuccess(property));
  })
  .catch(error => {
    toast.error("doPropertyFindById Fail");
  });
}

export const changeName = event => ({
  type: ActionTypes.PROPERTY_UPDATE_CHANGE_NAME,
  payload: event.target.value
})

export const changeStatus = event => ({
  type: ActionTypes.PROPERTY_UPDATE_CHANGE_STATUS,
  payload: event.target.value
})


export const changeImages = event => ({
  type: ActionTypes.PROPERTY_UPDATE_CHANGE_IMAGES,
  payload: event.target.files
})

const propertyUpdateSuccess = () => ({
  type: ActionTypes.PROPERTY_UPDATE_SUCCESS,
})

export const doPropertyUpdate = (id) => (dispatch, getState) => {
  const {propertyUpdate} = getState();

  const formData = new FormData();
  formData.append('name', propertyUpdate.name);
  formData.append('status', propertyUpdate.status);
  for (let i = 0; i < propertyUpdate.images.length; i++) {
    formData.append(`files`, propertyUpdate.images[i]);
  }
let abc = productService.getURL() + `/${id}`;
  return axios.post(productService.getURL() + `/${id}`, formData,
      {
        headers: {
          ...api.authHeader(),
          'Content-Type': 'multipart/form-data'
        }
      })
  .then(response => {
    toast.success("Post Success");
    dispatch(propertyUpdateSuccess());
  })
  .catch(error => {
    toast.error("Post Fail");
  });
}

const leavePage = (property) => ({
  type: ActionTypes.PROPERTY_UPDATE_LEAVE
})