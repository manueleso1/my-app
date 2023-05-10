import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
 
  const expensesFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  }
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  }); 
 
  return (
    <Card className="expenses">
      <ExpensesFilter 
        selected= {filteredYear} 
        onChangeFilter ={expensesFilterHandler}
      />
       <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;