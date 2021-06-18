import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TrackerSurplus from '../components/TrackerSurplus';
import SimulatorIncome from '../components/SimulatorIncome';
import SimulatorExpense from '../components/SimulatorExpense';

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
      simulatedIncomeNumber={simulatedIncomeNumber}
      setSimulatedIncomeNumber={setSimulatedIncomeNumber}
      />
      <SimulatorExpense
      monthlyExpenses={monthlyExpenses}
      simulatedExpenseNumber={simulatedExpenseNumber}
      setSimulatedExpenseNumber={setSimulatedExpenseNumber}
      />
      <TrackerSurplus incomes={incomes} expenses={expenses} />
    </div>
  );
}

Simulator.propTypes = {
  user: PropTypes.any,
  incomes: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired
};

export default Simulator;
