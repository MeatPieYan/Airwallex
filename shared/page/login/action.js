/**
 * ------------------------------------------------------------------
 * action contants
 * ------------------------------------------------------------------
 */
export const TOGGLE_REQUEST_MODAL = Symbol('TOGGLE_REQUEST_MODAL');
export const TOGGLE_SUCCESS_MODAL = Symbol('TOGGLE_SUCCESS_MODAL');
export const INPUT_CHANGE = Symbol('INPUT_CHANGE');
export const SEND_REQ = Symbol('SEND_REQ');

/**
 * ------------------------------------------------------------------
 * action func
 * ------------------------------------------------------------------
 */
export const showRequestModal = () => ({ type: TOGGLE_REQUEST_MODAL, payload: true });
export const hiddenRequestModal = () => ({ type: TOGGLE_REQUEST_MODAL, payload: false });
export const showSuccessModal = () => ({ type: TOGGLE_SUCCESS_MODAL, payload: true });
export const hiddenSuccessModal = () => ({ type: TOGGLE_SUCCESS_MODAL, payload: false });

export const inputChange = (key, value, hasError) => ({ type: INPUT_CHANGE, payload: { key, value, hasError } });
export const sendReq = values => ({ type: SEND_REQ, payload: values });