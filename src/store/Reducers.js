import { combineReducers } from '@reduxjs/toolkit'

//reducers
import ProductReducer, { Product } from './../services/Products/ProductSlice'

const AppReducer = combineReducers({
  [Product]: ProductReducer,
})

//aqui se procesa si hay estado de login
const RootReducer = (state, action) => AppReducer(state, action)

export default RootReducer
