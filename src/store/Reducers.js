import { combineReducers } from '@reduxjs/toolkit'

import ProductsReducer, { Products } from '../services/Products/ProductsSlice'
import ItemReducer, { Item } from '../services/Item/ItemSlice'

const AppReducer = combineReducers({
  [Products]: ProductsReducer,
  [Item]: ItemReducer,
})

const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer
