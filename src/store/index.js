import { configureStore } from '@reduxjs/toolkit'
import userName from './slices/userName.slices'

export default configureStore({
  reducer: {
    userName
	}
})