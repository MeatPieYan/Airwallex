import { takeLatest } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';
import { SEND_REQ, hiddenRequestModal, showSuccessModal } from './action';
import { setErrorMsg, resetErrorMsg, showLoading, hideLoading } from '../../common/action';

import commonService from '../../common/service';

function* sendReq(action) {
  try {
    yield put(resetErrorMsg());
    yield put(showLoading());
    const data = yield call(commonService, '/api/login/sendReq', action.payload);
    // console.log(data)
    yield put(hiddenRequestModal());
    yield put(showSuccessModal());
    yield put(hideLoading());
  } catch (error) {
    yield put(setErrorMsg(error));
    yield put(hideLoading());
  }
}

export default function* () {
  yield all([
    takeLatest(SEND_REQ, sendReq)
  ]);
}
