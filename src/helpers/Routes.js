import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Income from '../views/Income';
import Expenses from '../views/Expenses';
import Savings from '../views/Savings';
import Steps from '../views/Steps';

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
function Routes({ user, incomes, setIncomes }) {
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
        component={() => <Expenses user={user} />}
        />
        <PrivateRoute
        user={user}
        path='/savings'
        component={() => <Savings user={user} />}
        />
        <PrivateRoute
        user={user}
        path='/steps'
        component={() => <Steps user={user} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  incomes: PropTypes.array.isRequired,
  setIncomes: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
