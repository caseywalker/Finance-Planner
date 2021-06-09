import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function IncomeForm({
  firebaseKey,
  title,
  amount,
  payDate,
  incomeType,
  user
}) {
  return (
    <div>
      
    </div>
  );
}

IncomeForm.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  payDate: PropTypes.string.isRequired,
  incomeType: PropTypes.string.isRequired,
  user: PropTypes.any
};

export default IncomeForm;
