import { createSlice } from '@reduxjs/toolkit'

export const Products = 'Products'

const initialState = {
  loadingProducts: false,
  dataProducts: [],
  success: {
    message: '',
    success: false,
  },
  error: {
    message: '',
    error: false,
  },
}

const ProductsSlice = createSlice({
  initialState,
  name: Products,
  reducers: {
    getProducts: state => ({
      ...state,
      loadingProduct: true,
    }),
    getProductsFailed: (state, { payload }) => ({
      ...state,
      loadingProduct: false,
      success: {
        ...state.success,
        message: '',
        success: false,
      },
      error: {
        ...state.error,
        message: payload.error,
        error: true,
      },
    }),
    getProductsSuccess: (state, { payload }) => ({
      ...state,
      loadingProducts: false,
      dataProducts: payload,
      success: {
        ...state.success,
        message: payload.success,
        success: true,
      },
      error: {
        ...state.error,
        message: '',
        error: false,
      },
    }),
  },
})

export const { getProducts, getProductsFailed, getProductsSuccess } =
  ProductsSlice.actions

export default ProductsSlice.reducer
