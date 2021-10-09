import { createSlice } from '@reduxjs/toolkit'

export const Product = 'Product'

const initialState = {
  loadingProduct: false,
  dataProduct: [],
  success: {
    message: '',
    success: false,
  },
  error: {
    message: '',
    error: false,
  },
}

const ProductSlice = createSlice({
  initialState,
  name: Product,
  reducers: {
    getProduct: state => ({
      ...state,
      loadingProduct: true,
    }),
    getProductFailed: (state, { payload }) => ({
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
    getProductSuccess: (state, { payload }) => ({
      ...state,
      loadingProduct: false,
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

export const { getProduct, getProductFailed, getProductSuccess } =
  ProductSlice.actions

export default ProductSlice.reducer
