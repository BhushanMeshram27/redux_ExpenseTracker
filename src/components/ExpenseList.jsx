import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTransaction } from "../features/expense/expenseSlice";

export default function ExpenseList() {
  const transactions = useSelector(
    (state) => state.expenses.transactions
  );

  const dispatch = useDispatch();

  //  separate totals
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{expense}</h3>

      {/*  Profit / Loss */}
      <h2>
        {balance >= 0
          ? `Profit: ₹${balance}`
          : `Loss: ₹${Math.abs(balance)}`}
      </h2>

      <hr />

      {transactions.map((t) => (
        <div key={t.id}>
          <span>
            {t.title} - ₹{t.amount} ({t.type})
          </span>

          <button onClick={() => dispatch(removeTransaction(t.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}