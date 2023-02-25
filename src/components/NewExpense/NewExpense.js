import React from "react";

import ExpenseForm from "components/NewExpense/ExpenseForm";
import "components/NewExpense/NewExpense.css";

function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
