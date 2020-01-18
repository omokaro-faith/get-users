import { put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'
import baseURL from '../config'
import actionTypes from '../actions/actionTypes'

function* getUsersRequestSaga () {
  yield put({ type: actionTypes.GET_USER_REQUEST })
  try {
    const response = yield axios.get(baseURL.USER_URL);
    const data = yield response

    yield put({ type: actionTypes.GET_USER_SUCCESSFUL, data })
  } catch(e) {
    yield put({ type: actionTypes.GET_USER_FAILED, data: e.message })
  }
}

function* getUsersSaga() {
  yield takeLatest(actionTypes.GET_USERS, getUsersRequestSaga)
}

export default function* rootSaga() {
  yield all([getUsersSaga()])
}