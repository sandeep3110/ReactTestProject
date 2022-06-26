import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const saveExpenseHandler = (newExepense) => {
    const expenseData = { ...newExepense, id: Math.random().toString() };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};
