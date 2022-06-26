import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpenseItem
          key={Math.random()}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
};
