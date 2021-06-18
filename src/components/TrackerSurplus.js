import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function TrackerSurplus({ incomes, expenses }) {
  const [, setMonthlyExpenses] = useState(0);
  const [, setMonthlyIncome] = useState(0);
  const [surplus, setSurplus] = useState(0);

  useEffect(() => {
    expenses.forEach((expense) => {
      setMonthlyExpenses((prevState) => prevState + expense.amount);
      setSurplus((prevState) => prevState - expense.amount);
    });
    incomes.forEach((income) => {
      setMonthlyIncome((prevState) => prevState + income.amount);
      setSurplus((prevState) => prevState + income.amount);
    });
  }, []);

  const isSurplus = () => (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Surplus</CardTitle>
          <CardText>Monthly Surplus: ${surplus}</CardText>
          <CardText>Annual Surplus: ${surplus * 12}</CardText>
          <Link to='/simulator'>
            <Button type='button' color='warning'>Simulator</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );

  const isDeficit = () => (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Deficit</CardTitle>
          <CardText>Monthly Deficit: ${surplus}</CardText>
          <CardText>Annual Deficit: ${surplus * 12}</CardText>
          <Link to='/simulator'>
            <Button type='button' color='warning'>Simulator</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );

  return (
    <div>
      <h2>This is the surplus</h2>
          {
            surplus >= 0 ? isSurplus() : isDeficit()
          }
    </div>
  );
}

TrackerSurplus.propTypes = {
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default TrackerSurplus;
