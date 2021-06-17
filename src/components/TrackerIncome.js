import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

function TrackerIncome({ incomes }) {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);

  useEffect(() => {
    incomes.forEach((income) => {
      setMonthlyIncome((prevState) => prevState + income.amount);
      setAnnualIncome((prevState) => prevState + (income.amount * 12));
    });
  }, []);

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Total Income</CardTitle>
          <CardText>Monthly Income Amount: ${monthlyIncome}</CardText>
          <CardText>Annual Income Amount: ${annualIncome}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

TrackerIncome.propTypes = {
  incomes: PropTypes.array.isRequired
};

export default TrackerIncome;
