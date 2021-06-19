import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SimulatorIncome from '../components/SimulatorIncome';
import SimulatorExpense from '../components/SimulatorExpense';
import SimulatorSurplus from '../components/SimulatorSurplus';

function Simulator({ user, incomes, expenses }) {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [simulatedIncomeNumber, setSimulatedIncomeNumber] = useState(0);
  const [simulatedExpenseNumber, setSimulatedExpenseNumber] = useState(0);

  useEffect(() => {
    incomes.forEach((income) => {
      setMonthlyIncome((prevState) => prevState + income.amount);
    });
  }, []);

  useEffect(() => {
    expenses.forEach((expense) => {
      setMonthlyExpenses((prevState) => prevState + expense.amount);
    });
  }, []);

  return (
    <div>
      <h2>You are on the simulator page</h2>
      <h5> { user.uid } </h5>
      <SimulatorIncome
      monthlyIncome={monthlyIncome}
      setSimulatedIncomeNumber={setSimulatedIncomeNumber}
      />
      <SimulatorExpense
      monthlyExpenses={monthlyExpenses}
      setSimulatedExpenseNumber={setSimulatedExpenseNumber}
      />
      <SimulatorSurplus
      monthlyIncome={monthlyIncome}
      monthlyExpenses={monthlyExpenses}
      simulatedIncomeNumber={simulatedIncomeNumber}
      simulatedExpenseNumber={simulatedExpenseNumber}
      />
    </div>
  );
}

Simulator.propTypes = {
  user: PropTypes.any,
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Simulator;