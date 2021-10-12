import { combineReducers } from '@reduxjs/toolkit'

//reducers
import ProductsReducer, { Products } from '../services/Products/ProductsSlice'
import ItemReducer, { Item } from '../services/Item/ItemSlice'

const AppReducer = combineReducers({
  [Products]: ProductsReducer,
  [Item]: ItemReducer,
})

//aqui se procesa si hay estado de login
const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer
