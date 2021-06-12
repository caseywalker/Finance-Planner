import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addSaving, updateSavings } from '../helpers/data/savingsData';

function SavingsForm({
  firebaseKey,
  formTitle,
  title,
  savedAmount,
  targetAmount,
  savingType,
  user,
  setSavings
}) {
  const [saving, setSaving] = useState({
    title: title || '',
    targetAmount: targetAmount || 0,
    savedAmount: savedAmount || 0,
    savingType: savingType || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setSaving((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleNumberInput = (e) => {
    setSaving((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.valueAsNumber
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (saving.firebaseKey) {
      updateSavings(saving).then((expenseArray) => setSavings(expenseArray));
    } else {
      addSaving(saving).then((expenseArray) => setSavings(expenseArray));
    }
  };

  return (
    <div className='savings-div'>
      <form className='mt-3' id='add-savings-form' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <label>Title:</label>
        <input
        className='ml-2'
        name='title'
        type='text'
        placeholder='Savings Title'
        value={saving.title}
        onChange={handleInputChange} />
        <br/>
        <label>Target Amount:</label>
        <input
        className='ml-2'
        name='targetAmount'
        type='number'
        value={saving.targetAmount}
        onChange={handleNumberInput} />
        <br/>
        <label>Saved Amount:</label>
        <input
        className='ml-2'
        name='savedAmount'
        type='number'
        value={saving.savedAmount}
        onChange={handleNumberInput} />
        <br/>
        <label>Savings Type:</label>
        <input
        className='ml-2'
        name='savingType'
        type='text'
        placeholder='Type'
        value={saving.savingType}
        onChange={handleInputChange} />
        <br/>
        <Button color='info' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

SavingsForm.propTypes = {
  firebaseKey: PropTypes.string,
  formTitle: PropTypes.string.isRequired,
  title: PropTypes.string,
  savedAmount: PropTypes.any,
  targetAmount: PropTypes.any,
  savingType: PropTypes.string,
  user: PropTypes.any,
  setSavings: PropTypes.func.isRequired
};

export default SavingsForm;
