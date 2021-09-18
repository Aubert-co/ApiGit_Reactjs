import { configureStore } from '@reduxjs/toolkit'
import actionsSlice from './actionsSlice'
export default configureStore({
  reducer: {
     actions:actionsSlice
  }
})