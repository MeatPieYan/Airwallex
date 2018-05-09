export const SET_ERROR_MSG = Symbol('SET_ERROR_MSG');
export const SHOW_LOADING = Symbol('SHOW_LOADING');

export const setErrorMsg = msg => ({ type: SET_ERROR_MSG, payload: msg });
export const resetErrorMsg = () => ({ type: SET_ERROR_MSG, payload: '' });
export const showLoading = () => ({ type: SHOW_LOADING, payload: true });
export const hideLoading = () => ({ type: SHOW_LOADING, payload: false });
