import React from 'react';
import PropTypes from 'prop-types';
import IncomeCard from '../components/IncomeCard';

function Income({ incomes, user }) {
  return (
    <div>
      <h2>You are on the Income page</h2>
      {
        incomes.map((incomeInfo) => (
          <IncomeCard
          key={incomeInfo.firebaseKey}
          firebaseKey={incomeInfo.firebaseKey}
          title={incomeInfo.title}
          amount={incomeInfo.amount}
          payDate={incomeInfo.payDate}
          incomeType={incomeInfo.incomeType}
          user={user}
          />
        ))
      }
    </div>
  );
}

Income.propTypes = {
  incomes: PropTypes.array.isRequires,
  user: PropTypes.any
};

export default Income;
