import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseCard from '../components/ExpenseCard';

function Expenses({ expenses, setExpenses, user }) {
  const [adding, setAdding] = useState(false);

  const handleClick = () => {
    setAdding((prevState) => !prevState);
  };

  return (
    <div>
      <h2 className='mt-2'>Expenses</h2>
      <Button className='my-3' color='success' onClick={() => handleClick()}>
        { adding ? 'Close Form' : 'Add Expense' }
      </Button>
        {
          adding && <ExpenseForm
            formTitle={'Add Expense'}
            setExpenses={setExpenses}
            user={user}
            />
        }
      {
        expenses.map((expenseInfo) => (
          <ExpenseCard
          key={expenseInfo.firebaseKey}
          firebaseKey={expenseInfo.firebaseKey}
          title={expenseInfo.title}
          amount={expenseInfo.amount}
          dueDate={expenseInfo.dueDate}
          expenseType={expenseInfo.expenseType}
          user={user}
          setExpenses={setExpenses}
          />
        ))
      }
    </div>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
  setExpenses: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Expenses;
