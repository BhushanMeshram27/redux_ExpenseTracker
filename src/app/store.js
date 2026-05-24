import {configureStore} from '@reduxjs/toolkit'
import expenseReducer from '../features/expense/expenseSlice.js'

export const store = configureStore({
    reducer: {expenses:expenseReducer,
    }
})