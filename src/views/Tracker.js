import React from 'react';
import PropTypes from 'prop-types';
import TrackerIncome from '../components/TrackerIncome';
import TrackerExpense from '../components/TrackerExpense';
import TrackerSurplus from '../components/TrackerSurplus';

function Tracker({ incomes, expenses }) {
  return (
    <div>
      <h2>Tracker</h2>
      <TrackerIncome incomes={incomes} />
      <TrackerExpense expenses={expenses} />
      <TrackerSurplus incomes={incomes} expenses={expenses} />
    </div>
  );
}

Tracker.propTypes = {
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Tracker;
