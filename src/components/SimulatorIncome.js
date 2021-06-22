import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function SimulatorIncome({ monthlyIncome, setSimulatedIncomeNumber }) {
  const [simulatedIncome, setSimulatedIncome] = useState(monthlyIncome);
  const handleNumberInput = (e) => {
    setSimulatedIncome(e.target.valueAsNumber);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSimulatedIncomeNumber(simulatedIncome);
  };

  return (
    <div>
      <Card className='tracker-cards'>
        <CardBody>
          <CardTitle tag="h5">Total Income</CardTitle>
          <CardText>Monthly Income Amount: ${monthlyIncome}</CardText>
          <label>What if my income was: </label>
          <input
          className='ml-2'
          name='amount'
          type='number'
          value={simulatedIncome}
          onChange={handleNumberInput} />
          <br/>
          <CardText>Simulated Monthly Income: ${simulatedIncome}</CardText>
          <Button color='info' type='button' onClick={handleClick}>Submit</Button>
        </CardBody>
      </Card>
    </div>
  );
}

SimulatorIncome.propTypes = {
  monthlyIncome: PropTypes.number.isRequired,
  setSimulatedIncomeNumber: PropTypes.func.isRequired
};

export default SimulatorIncome;
