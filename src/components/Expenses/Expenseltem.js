import React from "react";

import ExpenseDate from "components/Expenses/ExpenseDate";
import Card from "components/UI/Card";
import "components/Expenses/ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
