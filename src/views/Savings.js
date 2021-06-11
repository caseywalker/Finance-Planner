import React from 'react';
import PropTypes from 'prop-types';
import SavingsForm from '../components/SavingsForm';

function Savings({
  user,
  setSavings
}) {
  return (
    <div>
      <h2>You are on the Savings page</h2>
      <SavingsForm
        formTitle={'Add Saving'}
        setSavings={setSavings}
        user={user}
      />
    </div>
  );
}

Savings.propTypes = {
  user: PropTypes.any,
  setSavings: PropTypes.func.isRequired,
  savings: PropTypes.array.isRequired
};

export default Savings;
