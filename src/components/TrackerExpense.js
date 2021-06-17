import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function TrackerExpense({ expenses }) {
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [annualExpenses, setAnnualExpenses] = useState(0);

  useEffect(() => {
    expenses.forEach((expense) => {
      setMonthlyExpenses((prevState) => prevState + expense.amount);
      setAnnualExpenses((prevState) => prevState + (expense.amount * 12));
    });
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Total Expenses</CardTitle>
          <CardText>Monthly Expense Amount: ${monthlyExpenses}</CardText>
          <CardText>Annual Expense Amount: ${annualExpenses}</CardText>
          <Link to='/expenses'>
            <Button type='button' color='info'>View Expenses</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

TrackerExpense.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default TrackerExpense;
