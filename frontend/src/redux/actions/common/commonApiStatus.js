import {apiStatus} from "../../constants/apiStatus";

export const noLoading = (status, prefix) => ({
  type: status,
  payload: {
    status: apiStatus.NO_LOADING,
    message: (prefix && (prefix + " ")) + "No Loading"
  }
})

export const loading = (status, prefix) => ({
  type: status,
  payload: {
    status: apiStatus.LOADING,
    message: (prefix && (prefix + " ")) + "Loading"
  }
})

export const success = (status, prefix) => ({
  type: status,
  payload: {
    status: apiStatus.SUCCEEDED,
    message: (prefix && (prefix + " ")) + "Success"
  }
})

export const fail = (status, prefix) => ({
  type: status,
  payload: {
    status: apiStatus.FAILED,
    message: (prefix && (prefix + " ")) + "Fail"
  }
})