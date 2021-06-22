import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-minimal-pie-chart';
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
      <Card className='pie-cards'>
        <CardBody>
          <CardTitle tag="h5">Simulated Surplus</CardTitle>
          <CardText>Current Monthly
            {
            surplus >= 0 ? ' Surplus' : ' Deficit'
            } ${surplus}</CardText>
          <CardText>Simulated Surplus: ${simulatedSurplus}</CardText>
          <PieChart className='tracker-pie'
            data={[
              { title: 'Income', value: simulatedIncomeNumber, color: 'green' },
              { title: 'Expenses', value: simulatedExpenseNumber, color: 'red' }
            ]}
          />
        </CardBody>
      </Card>
    </>
  );

  const isDeficit = () => (
    <>
      <Card className='pie-cards'>
        <CardBody>
          <CardTitle tag="h5">Simulated Deficit</CardTitle>
          <CardText>Current Monthly
            {
            surplus >= 0 ? ' Surplus' : ' Deficit'
            } ${surplus}</CardText>
          <CardText>Simulated Deficit: ${simulatedSurplus}</CardText>
          <PieChart className='tracker-pie'
            data={[
              { title: 'Income', value: simulatedIncomeNumber, color: 'green' },
              { title: 'Expenses', value: simulatedExpenseNumber, color: 'red' }
            ]}
          />
        </CardBody>
      </Card>
    </>
  );

  return (
    <div>
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
