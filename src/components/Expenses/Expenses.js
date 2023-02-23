import "components/Expenses/Expenses.css";
import ExpenseItem from "components/Expenses/Expenseltem";
import Card from "components/UI/Card";

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((content, index) => (
        <ExpenseItem
          key={content.id}
          title={content.title}
          amount={content.amount}
          date={content.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
