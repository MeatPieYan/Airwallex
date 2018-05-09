import { INPUT_CHANGE, TOGGLE_REQUEST_MODAL } from './action';

const initialState = {
  showRequestModalFlag: false,
  form: {
    value: {},
    validate: {}
  }
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
          value: {
            ...state.form.value,
            [action.payload.key]: action.payload.value
          },
          validate: {
            ...state.form.validate,
            [action.payload.key]: action.payload.hasError
          }
        }
      }
    default:
      return state;
  }
}
