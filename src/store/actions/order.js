import * as actionTypes from './actionTypes';

export const orderRequest = () => {
  return {type: actionTypes.ORDER_REQUEST};
};

export const orderSuccess = () => {
  return {type: actionTypes.ORDER_SUCCESS};
};

export const orderError = (error) => {
  return {type: actionTypes.ORDER_ERROR, error};
};