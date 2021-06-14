import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function Steps({ user, steps, setSteps }) {
  console.warn(steps);
  console.warn(setSteps);
  return (
    <div>
      <h2>You are on the Steps page</h2>
      <p> {user.uid} </p>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step One: Save $1,000 for Emergency Fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step1 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Two: Pay off all Non-Mortgage Debt.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step2 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Three: Save 6 months of living expenses in an Emergency Fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step3 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Four: Invest 15% of income into retirement savings.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step4 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Five: Save for your children&apos;s college fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step5 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Six: Pay off the house early.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step6 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Seven: Build wealth and give</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ steps.step7 === 'true' ? 'Completed' : 'Not Completed'}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

Steps.propTypes = {
  user: PropTypes.any.isRequired,
  steps: PropTypes.object.isRequired,
  setSteps: PropTypes.func.isRequired
};

export default Steps;
