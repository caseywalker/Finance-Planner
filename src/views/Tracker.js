import React from 'react';
import PropTypes from 'prop-types';
import TrackerIncome from '../components/TrackerIncome';
import TrackerExpense from '../components/TrackerExpense';
import TrackerSurplus from '../components/TrackerSurplus';

function Tracker({ user, incomes, expenses }) {
  return (
    <div>
      <h2>You are on the tracker page</h2>
      <h5> { user.uid } </h5>
      <TrackerIncome incomes={incomes} />
      <TrackerExpense expenses={expenses} />
      <TrackerSurplus incomes={incomes} expenses={expenses} />
    </div>
  );
}

Tracker.propTypes = {
  user: PropTypes.any,
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Tracker;
