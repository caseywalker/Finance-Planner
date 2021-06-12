import React from 'react';
import PropTypes from 'prop-types';

function Steps({ user, steps, setSteps }) {
  console.warn(steps);
  console.warn(setSteps);
  return (
    <div>
      <h2>You are on the Steps page</h2>
      <p> {user.uid} </p>
    </div>
  );
}

Steps.propTypes = {
  user: PropTypes.any.isRequired,
  steps: PropTypes.object.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default Steps;
