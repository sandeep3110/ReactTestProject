import { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
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
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const yearFilterHandler = (filter) => {
    setFilteredYear(filter);
    setFilteredExpenses(getFilterExpenses(filter));
    console.log("Inside Expenses", filter);
  };

  const getFilterExpenses = (filter) => {
    return props.expenses
      .filter((expense) => expense.date.getFullYear() === parseInt(filter))
      .map((element) => {
        return (
          <ExpenseItem
            key={Math.random()}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearFilterHandler}
        />
        {filteredExpenses}
      </Card>
    </div>
  );
};
