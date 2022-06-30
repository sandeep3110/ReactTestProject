import { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEneteredTitle] = useState("");
  const [enteredAmount, setEneteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    console.log(event.target.value);
    setEneteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    console.log(event.target.value);
    setEneteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpense(expenseData);

    console.log(expenseData);
    setEneteredAmount("");
    setEneteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" name="cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" name="submit">
          Add Expenses
        </button>
      </div>
    </form>
  );
};
