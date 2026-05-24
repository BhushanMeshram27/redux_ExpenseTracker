import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

export const expenseSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
    },
  },
});

export const { addTransaction, removeTransaction } = expenseSlice.actions;
export default expenseSlice.reducer;