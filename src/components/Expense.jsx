import React from "react"

const Expense = (expense) => {
    return (
      <div className="expense">
        <div className="expense-name">{expense.name}</div>
        <div className="expense-amount">
          ${Number.parseFloat(expense.amount).toFixed(2)}
        </div>
        <div className="expense-date">{expense.date}</div>
      </div>
    )
}

export default Expense