import { SET_ERROR_MSG, SHOW_LOADING } from './action';

export default function (state = { errorMsg: '', loading: false }, action) {
  switch (action.type) {
    case SET_ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload
      };
    case SHOW_LOADING:
      return {
        ...state, 
        loading: action.payload
      }
    default:
      return state;
  }
}
