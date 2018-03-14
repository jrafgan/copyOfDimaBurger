import * as actionTypes from '../actions/actionTypes';

const INITIAL_INGREDIENTS = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
};

const INITIAL_PRICE = 20;

const initialState = {
  ingredients: INITIAL_INGREDIENTS,
  totalPrice: INITIAL_PRICE,
};

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 20,
  meat: 50,
  bacon: 30
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.INIT_INGREDIENTS:
      return {...state, ingredients: {...INITIAL_INGREDIENTS}, totalPrice: INITIAL_PRICE};
    default:
      return state;
  }
};

export default reducer;