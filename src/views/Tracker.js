import React from 'react';
import PropTypes from 'prop-types';
import TrackerIncome from '../components/TrackerIncome';
import TrackerExpense from '../components/TrackerExpense';
import TrackerSurplus from '../components/TrackerSurplus';

function Tracker({ incomes, expenses }) {
  return (
    <div>
      <h2>Tracker</h2>
      <div className='tracker-container'>
        <div className='tracker-income-expense'>
          <TrackerIncome incomes={incomes} />
          <TrackerExpense expenses={expenses} />
        </div>
        <div className='tracker-surplus'>
          <TrackerSurplus incomes={incomes} expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

Tracker.propTypes = {
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Tracker;
