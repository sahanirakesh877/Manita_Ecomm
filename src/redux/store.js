import { configureStore } from '@reduxjs/toolkit'
import hamSlice from './features/hamSlice'

export const store = configureStore({
  reducer: {
    hamburger:hamSlice

  },
})