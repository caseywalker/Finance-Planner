import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getIncomes } from '../helpers/data/incomeData';
import { getExpenses } from '../helpers/data/expenseData';
import { getSavings } from '../helpers/data/savingsData';
import { addSteps, getSteps } from '../helpers/data/stepsData';

function App() {
  const [user, setUser] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState([]);
  const [steps, setSteps] = useState({});
  const [indexSteps, setIndexSteps] = useState({
    step1: 'false',
    step2: 'false',
    step3: 'false',
    step4: 'false',
    step5: 'false',
    step6: 'false',
    step7: 'false',
    uid: ''
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.uid
        };
        setUser(userInfoObj);
        setIndexSteps((prevState) => ({
          ...prevState,
          uid: authed.uid
        }));
        getIncomes(authed.uid).then((incomeArray) => setIncomes(incomeArray));
        getExpenses(authed.uid).then((expenseArray) => setExpenses(expenseArray));
        getSavings(authed.uid).then((savingsArray) => setSavings(savingsArray));
        getSteps(authed.uid).then((stepsObj) => {
          if (stepsObj.length === 0) {
            console.warn('no');
            console.warn(indexSteps);
            console.warn(authed.uid);
            addSteps(indexSteps, authed.uid).then((stepsObject) => setSteps(stepsObject[0]));
          } else {
            setSteps(stepsObj[0]);
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

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
        steps={steps}
        setSteps={setSteps}
        />
      </Router>
    </div>
  );
}

export default App;
