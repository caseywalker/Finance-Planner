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
  completed,
  savingType,
  user,
  setSavings
}) {
  const [saving, setSaving] = useState({
    title: title || '',
    targetAmount: targetAmount || 0,
    savedAmount: savedAmount || 0,
    savingType: savingType || '',
    completed: completed || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setSaving((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
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
        placeholder='0'
        value={saving.targetAmount}
        onChange={handleInputChange} />
        <br/>
        <label>Saved Amount:</label>
        <input
        className='ml-2'
        name='savedAmount'
        type='number'
        placeholder='0'
        value={saving.savedAmount}
        onChange={handleInputChange} />
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
        <label>Completed:</label>
        <input
        className='ml-2'
        name='completed'
        type='checkbox'
        value={saving.completed}
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
  completed: PropTypes.string,
  savingType: PropTypes.string,
  user: PropTypes.any,
  setSavings: PropTypes.func.isRequired
};

export default SavingsForm;
