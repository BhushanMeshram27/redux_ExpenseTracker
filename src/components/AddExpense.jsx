import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/expense/expenseSlice";

export default function AddExpense() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!title || !amount) return;

    dispatch(
      addTransaction({
        id: Date.now(),
        title,
        amount: Number(amount),
        type,
      })
    );

    setTitle("");
    setAmount("");
  };

  return (
   <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* New dropdown */}
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}