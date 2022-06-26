import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");

  const yearFilterHandler = (filter) => {
    setFilteredYear(filter);
    console.log("Inside Expenses", filter);
  };

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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={yearFilterHandler}
      />

      {expenses}
    </Card>
  );
};
