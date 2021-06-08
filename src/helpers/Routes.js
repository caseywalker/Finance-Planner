import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};

export default Routes;
