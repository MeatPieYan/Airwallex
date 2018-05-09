/**
 * ------------------------------------------------------------------
 * action contants
 * ------------------------------------------------------------------
 */
export const TOGGLE_REQUEST_MODAL = Symbol('TOGGLE_REQUEST_MODAL');
export const INPUT_CHANGE = Symbol('INPUT_CHANGE');


/**
 * ------------------------------------------------------------------
 * action func
 * ------------------------------------------------------------------
 */
export const showRequestModal = () => ({ type: TOGGLE_REQUEST_MODAL, payload: true });
export const hiddenRequestModal = () => ({ type: TOGGLE_REQUEST_MODAL, payload: false });

export const inputChange = (key, value) => ({ type: INPUT_CHANGE, payload: { key, value } });
