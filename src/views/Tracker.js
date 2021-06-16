import React from 'react';
import PropTypes from 'prop-types';

function Tracker({ user, incomes, expenses }) {
  return (
    <div>
      <h2>You are on the tracker page</h2>
      <h5> { user.uid } </h5>
      {
        incomes.map((income) => (
          <p key={income.firebaseKey}>{typeof income.amount}</p>
        ))
      }
      {
        expenses.map((expense) => (
          <p key={expense.firebaseKey}>{typeof expense.amount}</p>
        ))
      }
    </div>
  );
}

Tracker.propTypes = {
  user: PropTypes.any,
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Tracker;
