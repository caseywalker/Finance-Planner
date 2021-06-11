import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getIncomes } from '../helpers/data/incomeData';
import { getExpenses } from '../helpers/data/expenseData';
import { getSavings } from '../helpers/data/savingsData';
import { getSteps } from '../helpers/data/stepsData';

function App() {
  const [user, setUser] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);
  const [steps, setSteps] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid
        };
        setUser(userInfoObj);
        getIncomes(authed.uid).then((incomeArray) => setIncomes(incomeArray));
        getExpenses(authed.uid).then((expenseArray) => setExpenses(expenseArray));
        getSavings(authed.uid).then((savingsArray) => setSavings(savingsArray));
        getSteps(authed.uid).then((stepsObj) => setSteps(stepsObj));
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  console.warn(incomes);
  console.warn(expenses);
  console.warn(savings);
  console.warn(steps);
  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes
        user={user}
        incomes={incomes}
        setIncomes={setIncomes}
        expenses={expenses}
        setExpenses={setExpenses}
        savings={savings}
        setSavings={setSavings}
        />
      </Router>
    </div>
  );
}

export default App;
