import { all, takeLatest, put } from 'redux-saga/effects'

import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
} from './ProductsSlice'
import { GET } from './../../common/api'

function* FetchGetProducts({ payload }) {
  console.log(payload)
  const result = yield GET({ url: `items?q=${payload}` })

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
