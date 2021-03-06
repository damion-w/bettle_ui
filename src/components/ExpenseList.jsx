import React from "react";
import Auth from "../modules/Auth";
import { Redirect } from "react-router-dom";
import Expense from './Expense'

const ExpenseList = (event) => {
    return (
      <div className="expense-list">
        {!Auth.isUserAuthenticated() && <Redirect to="/" />}
        {event.expenses.map((expense) => (
          <Expense key={expense.id} {...expense} />
        ))}
      </div>
    );
};

export default ExpenseList
