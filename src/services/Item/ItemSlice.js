import { createSlice } from '@reduxjs/toolkit'

export const Item = 'Item'

const initialState = {
  loadingItem: true,
  item: {},
  idItem: '',
  success: {
    message: '',
    success: false,
  },
  error: {
    message: '',
    error: false,
  },
}

const ItemSlice = createSlice({
  initialState,
  name: Item,
  reducers: {
    getItemById: (state, { payload }) => ({
      ...state,
      loadingItem: true,
      idItem: payload.id,
    }),
    getItemByIdFailed: (state, { payload }) => ({
      ...state,
      loadingItem: false,
      error: {
        ...state.error,
        error: true,
        message: payload.error,
      },
      success: {
        ...state.success,
        message: '',
        success: false,
      },
    }),
    getItemByIdSuccess: (state, { payload }) => ({
      ...state,
      loadingItem: false,
      item: payload.item,
      error: {
        ...state.error,
        error: false,
        message: '',
      },
      success: {
        ...state.success,
        message: payload.success,
        success: true,
      },
    }),
  },
})

export const { getItemById, getItemByIdFailed, getItemByIdSuccess } =
  ItemSlice.actions

export default ItemSlice.reducer
