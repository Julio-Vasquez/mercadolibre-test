import { all, takeLatest, put } from 'redux-saga/effects'

import { getItemById, getItemByIdFailed, getItemByIdSuccess } from './ItemSlice'
import { GET } from './../../common/api'

function* FetchGetItemById({ type, payload }) {
  console.log(payload)
  const result = yield GET({ url: `items/${payload.id}` })
  console.log('============================')
  console.log(result)
  console.log('============================')
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
