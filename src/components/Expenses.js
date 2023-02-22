import "components/Expenses.css";
import ExpenseItem from "components/Expenseltem";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((content, index) => (
        <ExpenseItem
          key={content.id}
          title={content.title}
          amount={content.amount}
          date={content.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
