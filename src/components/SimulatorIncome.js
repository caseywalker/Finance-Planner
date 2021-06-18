import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function SimulatorIncome({ monthlyIncome }) {
  const [simulatedIncome, setSimulatedIncome] = useState(monthlyIncome);
  const handleNumberInput = (e) => {
    setSimulatedIncome(e.target.valueAsNumber);
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Total Income</CardTitle>
          <CardText>Monthly Income Amount: ${monthlyIncome}</CardText>
          <label>What if my income was: </label>
          <input
          className='ml-2'
          name='amount'
          type='number'
          placeholder='0'
          value={simulatedIncome}
          onChange={handleNumberInput} />
          <br/>
          <CardText>Simulated Monthly Income: ${simulatedIncome}</CardText>
          <Button color='info' type='button'>Submit</Button>
          <Link to='/income'>
            <Button type='button' color='info'>View Income</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

SimulatorIncome.propTypes = {
  monthlyIncome: PropTypes.number.isRequired,
};

export default SimulatorIncome;
