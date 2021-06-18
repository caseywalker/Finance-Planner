import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle
} from 'reactstrap';

function SimulatorSurplus({
  monthlyIncome,
  monthlyExpenses,
  simulatedIncomeNumber,
  simulatedExpenseNumber
}) {
  const surplus = (monthlyIncome - monthlyExpenses);
  const simulatedSurplus = (simulatedIncomeNumber - simulatedExpenseNumber);

  const isSurplus = () => (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Simulated Surplus</CardTitle>
          <CardText>Current Monthly
            {
            surplus >= 0 ? ' Surplus' : ' Deficit'
            } ${surplus}</CardText>
          <CardText>Simulated Surplus: ${simulatedSurplus}</CardText>
        </CardBody>
      </Card>
    </>
  );

  const isDeficit = () => (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Simulated Deficit</CardTitle>
          <CardText>Current Monthly
            {
            surplus >= 0 ? ' Surplus' : ' Deficit'
            } ${surplus}</CardText>
          <CardText>Simulated Deficit: ${simulatedSurplus}</CardText>
        </CardBody>
      </Card>
    </>
  );

  return (
    <div>
      <h2>This is the surplus</h2>
          {
            simulatedSurplus >= 0 ? isSurplus() : isDeficit()
          }
    </div>
  );
}

SimulatorSurplus.propTypes = {
  monthlyIncome: PropTypes.number.isRequired,
  monthlyExpenses: PropTypes.number.isRequired,
  simulatedIncomeNumber: PropTypes.number.isRequired,
  simulatedExpenseNumber: PropTypes.number.isRequired
};

export default SimulatorSurplus;
