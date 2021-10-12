import { all, takeLatest, put } from 'redux-saga/effects'

import { getItemById, getItemByIdFailed, getItemByIdSuccess } from './ItemSlice'
import { GET } from './../../common/api'

function* FetchGetItemById() {
  const result = yield GET({ url: 'url consulta' })

  yield put(
    result?.ok && result?.status === 200
      ? getItemByIdSuccess(result.payload)
      : getItemByIdFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getItemById, FetchGetItemById)
}

export default function* ItemSaga() {
  yield all([ActionWatcher()])
}
