import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseItem.css";

export const Expenses = (props) => {
  // eslint-disable-next-line array-callback-return
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

  return expenses;
};
