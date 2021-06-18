import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function SimulatorExpense({ monthlyExpenses }) {
  const [simulatedExpense, setSimulatedExpense] = useState(monthlyExpenses);
  const handleNumberInput = (e) => {
    setSimulatedExpense(e.target.valueAsNumber);
  };
  return (
    <div>
      <Card>
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
          <Button color='info' type='button'>Submit</Button>
          <Link to='/expenses'>
            <Button type='button' color='info'>View Expenses</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

SimulatorExpense.propTypes = {
  monthlyExpenses: PropTypes.number.isRequired,
};

export default SimulatorExpense;
