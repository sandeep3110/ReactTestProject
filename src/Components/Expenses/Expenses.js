import { useState } from "react";
import { Card } from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";
import { ExpensesChart } from "./ExpensesChart";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearFilterHandler = (filter) => {
    setFilteredYear(filter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} year={filteredYear} />
      </Card>
    </div>
  );
};
