import "components/Expenses.css";
import ExpenseItem from "components/Expenseltem";
import Card from "components/Card";

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
