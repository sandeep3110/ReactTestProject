import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const saveExpenseHandler = (newExepense) => {
    const expenseData = { ...newExepense, id: Math.random().toString() };
    props.onSaveExpenseData(expenseData);
    setOpenForm(false);
    console.log(expenseData);
  };

  const submitHandler = () => {
    setOpenForm(true);
  };

  const cancelHandler = () => {
    setOpenForm(false);
  };

  return (
    <div className="new-expense">
      {!openForm && (
        <button type="submit" onClick={submitHandler}>
          Add New Expense
        </button>
      )}
      {openForm && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};
