import { INPUT_CHANGE, TOGGLE_REQUEST_MODAL } from './action';

const initialState = {
  showRequestModalFlag: false,
  form: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_REQUEST_MODAL:
      return {
        ...state,
        showRequestModalFlag: action.payload
      };

    case INPUT_CHANGE:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.key]: action.payload.value
        }
      }
    default:
      return state;
  }
}
