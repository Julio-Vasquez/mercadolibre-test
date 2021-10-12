import { fork, all } from 'redux-saga/effects'

import ProductsSaga from './../services/Products/ProductsSaga'
import ItemSaga from '../services/Item/ItemSaga'

function* RootSagas() {
  yield all([fork(ProductsSaga), fork(ItemSaga)])
}

export default RootSagas
