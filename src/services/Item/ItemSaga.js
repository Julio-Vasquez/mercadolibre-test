import { all, takeLatest, put } from 'redux-saga/effects'

import { getItemById, getItemByIdFailed, getItemByIdSuccess } from './ItemSlice'
import { GET } from './../../common/api'

function* FetchGetItemById({ type, payload }) {
  const result = yield GET({ url: `items/${payload.id}` })
  yield put(
    result?.ok && result?.status === 200
      ? getItemByIdSuccess({
          success: result.statusText,
          item: result.payload,
        })
      : getItemByIdFailed({ error: result.payload.message })
  )
}

function* ActionWatcher() {
  yield takeLatest(getItemById, FetchGetItemById)
}

export default function* ItemSaga() {
  yield all([ActionWatcher()])
}
