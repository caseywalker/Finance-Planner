import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Income from '../views/Income';
import Expenses from '../views/Expenses';
import Savings from '../views/Savings';
import Steps from '../views/Steps';
import Tracker from '../views/Tracker';
import Simulator from '../views/Simulator';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (attributes) => (user
    ? (<Component {...attributes} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
function Routes({
  user,
  incomes,
  setIncomes,
  expenses,
  setExpenses,
  savings,
  setSavings,
  steps,
  setSteps
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
        <PrivateRoute
        user={user}
        path='/income'
        component={() => <Income
          user={user}
          incomes={incomes}
          setIncomes={setIncomes}
          />}
        />
        <PrivateRoute
        user={user}
        path='/expenses'
        component={() => <Expenses
          user={user}
          expenses={expenses}
          setExpenses={setExpenses}
          />}
        />
        <PrivateRoute
        user={user}
        path='/savings'
        component={() => <Savings
          user={user}
          savings={savings}
          setSavings={setSavings}
          />}
        />
        <PrivateRoute
        user={user}
        path='/steps'
        component={() => <Steps
          user={user}
          steps={steps}
          setSteps={setSteps}
          />}
        />
        <PrivateRoute
        user={user}
        path='/tracker'
        component={() => <Tracker
          user={user}
          incomes={incomes}
          expenses={expenses}
        />}
        />
        <PrivateRoute
        user={user}
        path='/simulator'
        component={() => <Simulator
          user={user}
          incomes={incomes}
          expenses={expenses}
        />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  incomes: PropTypes.array.isRequired,
  setIncomes: PropTypes.func.isRequired,
  expenses: PropTypes.array.isRequired,
  setExpenses: PropTypes.func.isRequired,
  savings: PropTypes.array.isRequired,
  setSavings: PropTypes.func.isRequired,
  steps: PropTypes.object.isRequired,
  setSteps: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
