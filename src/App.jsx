import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

function App() {
  

  return (
    <div>
      <h1>Expense & Income Tracker</h1>
    <AddExpense/>
    <ExpenseList/>
    </div>
  )
}

export default App
