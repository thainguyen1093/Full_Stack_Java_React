import axios from "axios";

import {toast} from "react-toastify";

import {
  productService
} from "../../../general/services";
import {api} from "../../../general/services";

import {ActionTypes} from "../../constants";


const propertyFindByIdSuccess = (property) => ({
  type: ActionTypes.PROPERTY_VIEW_FIND_BY_ID_SUCCESS,
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
    property.images = data.productImageList?.map(currentImage => currentImage.image) || [];
    dispatch(propertyFindByIdSuccess(property));
  })
  .catch(error => {
    toast.error("doPropertyFindById Fail");
  });
}

const leavePage = (property) => ({
  type: ActionTypes.PROPERTY_VIEW_LEAVE
})