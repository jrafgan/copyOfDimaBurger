import * as actionTypes from './actionTypes';
import axios from "../../axios-orders";

export const orderRequest = () => {
  return {type: actionTypes.ORDER_REQUEST};
};

export const orderSuccess = () => {
  return {type: actionTypes.ORDER_SUCCESS};
};

export const orderError = (error) => {
  return {type: actionTypes.ORDER_ERROR, error};
};

export const orderInit = () => {
  return {type: actionTypes.ORDER_INIT};
};

export const placeOrder = order => {
  return dispatch => {
    dispatch(orderRequest());
    axios.post('/orders.json', order).then(() => {
      dispatch(orderSuccess());
    }, error => {
      dispatch(orderError(error));
    });
  }
};