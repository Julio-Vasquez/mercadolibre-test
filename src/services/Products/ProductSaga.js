import { all, takeLatest, put } from 'redux-saga/effects'

import { getProduct, getProductFailed, getProductSuccess } from './ProductSlice'
import { GET } from './../../common/api'

function* FetchGetProduct() {
  const result = yield GET({ url: 'url consulta' })

  yield put(
    result?.ok && result?.status === 200
      ? getProductSuccess(result.payload)
      : getProductFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getProduct, FetchGetProduct)
}

export default function* ProductSaga() {
  yield all([ActionWatcher()])
}
