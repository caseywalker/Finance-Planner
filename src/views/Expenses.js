import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function Expenses({ expenses, setExpenses, user }) {
  return (
    <div>
      <h2>You are on the Expenses page</h2>
    </div>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
  setExpenses: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Expenses;
