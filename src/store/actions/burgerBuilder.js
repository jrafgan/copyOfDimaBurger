import * as actionTypes from './actionTypes';

export const addIngredient = ingredientName => {
  return {type: actionTypes.ADD_INGREDIENT, ingredientName};
};

export const removeIngredient = ingredientName => {
  return {type: actionTypes.REMOVE_INGREDIENT, ingredientName};
};

export const initIngredients = () => {
  return {type: actionTypes.INIT_INGREDIENTS};
};