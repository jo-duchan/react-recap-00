import React, { useState } from "react";

import Card from "components/UI/Card";
import ExpensesFilter from "components/Expenses/ExpensesFilter";
import ExpensesList from "components/Expenses/ExpensesList";
import ExpensesChart from "components/Expenses/ExpensesChart";
import "components/Expenses/Expenses.css";

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
