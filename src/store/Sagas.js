import { fork, all } from 'redux-saga/effects'

import ProductsSaga from './../services/Products/ProductsSaga'
import ItemSlice from '../services/Item/ItemSlice'

function* RootSagas() {
  yield all([fork(ProductsSaga), fork(ItemSlice)])
}

export default RootSagas
