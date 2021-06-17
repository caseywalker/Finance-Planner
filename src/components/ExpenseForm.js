import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addExpense, updateExpense } from '../helpers/data/expenseData';

function ExpenseForm({
  firebaseKey,
  formTitle,
  title,
  amount,
  dueDate,
  expenseType,
  user,
  setExpenses
}) {
  const [expense, setExpense] = useState({
    title: title || '',
    amount: amount || '',
    dueDate: dueDate || '',
    expenseType: expenseType || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setExpense((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleNumberInput = (e) => {
    setExpense((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.valueAsNumber
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.firebaseKey) {
      updateExpense(expense).then((expenseArray) => setExpenses(expenseArray));
    } else {
      addExpense(expense).then((expenseArray) => setExpenses(expenseArray));
    }
  };

  return (
    <div className='expense-div'>
      <form className='mt-3' id='add-expense-form' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <label>Title:</label>
        <input
        className='ml-2'
        name='title'
        type='text'
        placeholder='Expense Title'
        value={expense.title}
        onChange={handleInputChange} />
        <br/>
        <label>Expense Amount:</label>
        <input
        className='ml-2'
        name='amount'
        type='number'
        placeholder='0'
        value={expense.amount}
        onChange={handleNumberInput} />
        <br/>
        <label>Due Date:</label>
        <input
        className='ml-2'
        name='dueDate'
        type='text'
        placeholder='Day of month'
        value={expense.dueDate}
        onChange={handleInputChange} />
        <label>Expense Type:</label>
        <input
        className='ml-2'
        name='expenseType'
        type='text'
        placeholder='Type'
        value={expense.expenseType}
        onChange={handleInputChange} />
        <br/>
        <Button color='info' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

ExpenseForm.propTypes = {
  firebaseKey: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  amount: PropTypes.any,
  dueDate: PropTypes.string,
  expenseType: PropTypes.string,
  user: PropTypes.any,
  setExpenses: PropTypes.func.isRequired
};

export default ExpenseForm;
