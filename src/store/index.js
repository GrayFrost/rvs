import { configureStore } from '@reduxjs/toolkit'
import codeReducer from './code'

export default configureStore({
  reducer: {
    code: codeReducer
  },
})