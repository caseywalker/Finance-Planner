import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import SavingsForm from '../components/SavingsForm';
import SavingsCard from '../components/SavingsCard';

function Savings({
  user,
  savings,
  setSavings
}) {
  const [adding, setAdding] = useState(false);

  const handleClick = () => {
    setAdding((prevState) => !prevState);
  };
  return (
    <div>
      <h2 className='mt-2'>Savings</h2>
      <Button className='my-3' color='success' onClick={() => handleClick()}>
        { adding ? 'Close Form' : 'Add Saving Goal' }
      </Button>
        {
          adding && <SavingsForm
          formTitle={'Add Saving'}
          setSavings={setSavings}
          user={user}
        />
        }
      <div className='savings-container'>
      {
        savings.map((savingsInfo) => (
          <SavingsCard
          key={savingsInfo.firebaseKey}
          firebaseKey={savingsInfo.firebaseKey}
          title={savingsInfo.title}
          savedAmount={savingsInfo.savedAmount}
          targetAmount={savingsInfo.targetAmount}
          savingType={savingsInfo.savingType}
          user={user}
          setSavings={setSavings}
          />
        ))
      }
      </div>
    </div>
  );
}

Savings.propTypes = {
  user: PropTypes.any,
  setSavings: PropTypes.func.isRequired,
  savings: PropTypes.array.isRequired
};

export default Savings;
