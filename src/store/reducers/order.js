import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_REQUEST:
      return {...state, loading: true};
    case actionTypes.ORDER_SUCCESS:
      return {...state, loading: false};
    case actionTypes.ORDER_ERROR:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export default reducer;