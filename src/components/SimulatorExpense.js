import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function SimulatorExpense({ monthlyExpenses, setSimulatedExpenseNumber }) {
  const [simulatedExpense, setSimulatedExpense] = useState(monthlyExpenses);
  const handleNumberInput = (e) => {
    setSimulatedExpense(e.target.valueAsNumber);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSimulatedExpenseNumber(simulatedExpense);
  };

  return (
    <div>
      <Card className='tracker-cards'>
        <CardBody>
          <CardTitle tag="h5">Total Expenses</CardTitle>
          <CardText>Monthly Expense Amount: ${monthlyExpenses}</CardText>
          <label>What if my expenses were: </label>
          <input
          className='ml-2'
          name='amount'
          type='number'
          placeholder={monthlyExpenses}
          value={simulatedExpense}
          onChange={handleNumberInput} />
          <br/>
          <CardText>Simulated Monthly Income: ${simulatedExpense}</CardText>
          <Button color='info' type='button' onClick={handleClick}>Submit</Button>
        </CardBody>
      </Card>
    </div>
  );
}

SimulatorExpense.propTypes = {
  monthlyExpenses: PropTypes.number.isRequired,
  setSimulatedExpenseNumber: PropTypes.func.isRequired
};

export default SimulatorExpense;
