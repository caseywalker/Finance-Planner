import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import IncomeCard from '../components/IncomeCard';
import IncomeForm from '../components/IncomeForm';

function Income({ incomes, setIncomes, user }) {
  const [adding, setAdding] = useState(false);

  const handleClick = () => {
    setAdding((prevState) => !prevState);
  };

  return (
    <div>
      <h2 className='mt-2'>Incomes</h2>
      <Button className='my-3' color='success' onClick={() => handleClick()}>
        { adding ? 'Close Form' : 'Add Income' }
      </Button>
        {
          adding && <IncomeForm
            formTitle={'Add Income'}
            setIncomes={setIncomes}
            user={user}
            />
        }
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
  incomes: PropTypes.array.isRequired,
  setIncomes: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Income;
