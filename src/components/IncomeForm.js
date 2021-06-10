import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addIncome, updateIncome } from '../helpers/data/incomeData';

function IncomeForm({
  formTitle,
  firebaseKey,
  title,
  amount,
  payDate,
  incomeType,
  user,
  setIncomes
}) {
  const [income, setIncome] = useState({
    title: title || '',
    amount: amount || '',
    payDate: payDate || '',
    incomeType: incomeType || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setIncome((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income.firebaseKey) {
      updateIncome(income).then((incomeArray) => setIncomes(incomeArray));
    } else {
      addIncome(income).then((incomeArray) => setIncome(incomeArray));
    }
  };

  return (
    <div className='income-div'>
      <form className='mt-3' id='add-income-form' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <label>Title:</label>
        <input
        className='ml-2'
        name='title'
        type='text'
        placeholder='Income Title'
        value={income.title}
        onChange={handleInputChange} />
        <br/>
        <label>Amount:</label>
        <input
        className='ml-2'
        name='amount'
        type='number'
        placeholder='0'
        value={income.amount}
        onChange={handleInputChange} />
        <br/>
        <label>Pay Date:</label>
        <input
        className='ml-2'
        name='payDate'
        type='text'
        placeholder='Day of month'
        value={income.payDate}
        onChange={handleInputChange} />
        <label>Income Type:</label>
        <input
        className='ml-2'
        name='incomeType'
        type='text'
        placeholder='Type'
        value={income.incomeType}
        onChange={handleInputChange} />
        <br/>
        <Button color='info' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

IncomeForm.propTypes = {
  firebaseKey: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  amount: PropTypes.any,
  payDate: PropTypes.string,
  incomeType: PropTypes.string,
  setIncomes: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default IncomeForm;
