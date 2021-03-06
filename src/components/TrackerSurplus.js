import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function TrackerSurplus({ incomes, expenses }) {
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
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
      <Card className='pie-cards'>
        <CardBody>
          <CardTitle tag="h5">Surplus</CardTitle>
          <CardText>Monthly Surplus: ${surplus}</CardText>
          <CardText>Annual Surplus: ${surplus * 12}</CardText>
          <PieChart className='tracker-pie'
            data={[
              { title: 'Income', value: monthlyIncome, color: 'green' },
              { title: 'Expenses', value: monthlyExpenses, color: 'red' }
            ]}
          />
          <br />
          <Link to='/simulator'>
            <Button type='button' color='warning' className='mt-4'>Simulator</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );

  const isDeficit = () => (
    <>
      <Card className='pie-cards'>
        <CardBody>
          <CardTitle tag="h5">Deficit</CardTitle>
          <CardText>Monthly Deficit: ${surplus}</CardText>
          <CardText>Annual Deficit: ${surplus * 12}</CardText>
          <PieChart className='tracker-pie'
            data={[
              { title: 'Income', value: monthlyIncome, color: 'green' },
              { title: 'Expenses', value: monthlyExpenses, color: 'red' }
            ]}
          />
          <br />
          <Link to='/simulator'>
            <Button type='button' color='warning' className='mt-3'>Simulator</Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );

  return (
    <div>
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
