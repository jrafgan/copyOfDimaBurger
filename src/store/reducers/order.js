import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  ordered: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_INIT:
      return {...state, ordered: false};
    case actionTypes.ORDER_REQUEST:
      return {...state, loading: true, error: null};
    case actionTypes.ORDER_SUCCESS:
      return {...state, loading: false, error: null, ordered: true};
    case actionTypes.ORDER_FAILURE:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export default reducer;