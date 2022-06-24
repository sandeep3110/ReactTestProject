import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = (props) => {
  const expenses = props.expenses.map((element) => {
    return (
      <ExpenseItem
        key={Math.random()}
        title={element.title}
        amount={element.amount}
        date={element.date}
      />
    );
  });

  return <div className="expenses">{expenses}</div>;
};
