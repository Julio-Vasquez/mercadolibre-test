import { all, takeLatest, put } from 'redux-saga/effects'

import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
} from './ProductsSlice'
import { GET } from './../../common/api'

function* FetchGetProducts() {
  const result = yield GET({ url: 'url consulta' })

  yield put(
    result?.ok && result?.status === 200
      ? getProductsSuccess(result.payload)
      : getProductsFailed(result.payload)
  )
}

function* ActionWatcher() {
  yield takeLatest(getProducts, FetchGetProducts)
}

export default function* ProductsSaga() {
  yield all([ActionWatcher()])
}
