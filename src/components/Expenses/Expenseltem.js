import React, { useState } from "react";

import ExpenseDate from "components/Expenses/ExpenseDate";
import Card from "components/UI/Card";
import "components/Expenses/ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = () => {
    console.log("Clicked");
    setItemTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
