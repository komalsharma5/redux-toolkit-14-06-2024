import { configureStore } from '@reduxjs/toolkit'
import Counterslice from './Counterslice'

const store = configureStore({
    reducer: {
        cart: Counterslice.reducer
    }
})

export default store;