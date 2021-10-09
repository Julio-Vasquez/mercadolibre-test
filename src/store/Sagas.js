import { fork, all } from 'redux-saga/effects'

import ProductSaga from './../services/Products/ProductSaga'

function* RootSagas() {
  yield all([fork(ProductSaga)])
}

export default RootSagas
