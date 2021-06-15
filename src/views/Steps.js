import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function Steps({ user, steps, setSteps }) {
  const [localSteps, setLocalSteps] = useState({
    firebaseKey: steps.firebaseKey,
    step1: steps.step1,
    step2: steps.step2,
    step3: steps.step3,
    step4: steps.step4,
    step5: steps.step5,
    step6: steps.step6,
    step7: steps.step7
  });
  console.warn(steps);
  console.warn(setSteps);

  const handleClick = (type) => {
    switch (type) {
      case 'complete1':
        setLocalSteps((prevState) => ({
          ...prevState,
          step1: 'true'
        }));
        break;
      case 'complete2':
        setLocalSteps((prevState) => ({
          ...prevState,
          step2: 'true'
        }));
        break;
      case 'complete3':
        setLocalSteps((prevState) => ({
          ...prevState,
          step3: 'true'
        }));
        break;
      case 'complete4':
        setLocalSteps((prevState) => ({
          ...prevState,
          step4: 'true'
        }));
        break;
      case 'complete5':
        setLocalSteps((prevState) => ({
          ...prevState,
          step5: 'true'
        }));
        break;
      case 'complete6':
        setLocalSteps((prevState) => ({
          ...prevState,
          step6: 'true'
        }));
        break;
      case 'complete7':
        setLocalSteps((prevState) => ({
          ...prevState,
          step7: 'true'
        }));
        break;
      default: console.warn('nothing selected');
    }
  };

  const handleIncomplete = (type) => {
    switch (type) {
      case 'incomplete1':
        setLocalSteps((prevState) => ({
          ...prevState,
          step1: 'false'
        }));
        break;
      case 'incomplete2':
        setLocalSteps((prevState) => ({
          ...prevState,
          step2: 'false'
        }));
        break;
      case 'incomplete3':
        setLocalSteps((prevState) => ({
          ...prevState,
          step3: 'false'
        }));
        break;
      case 'incomplete4':
        setLocalSteps((prevState) => ({
          ...prevState,
          step4: 'false'
        }));
        break;
      case 'incomplete5':
        setLocalSteps((prevState) => ({
          ...prevState,
          step5: 'false'
        }));
        break;
      case 'incomplete6':
        setLocalSteps((prevState) => ({
          ...prevState,
          step6: 'false'
        }));
        break;
      case 'incomplete7':
        setLocalSteps((prevState) => ({
          ...prevState,
          step7: 'false'
        }));
        break;
      default: console.warn('nothing selected');
    }
  };

  return (
    <div>
      <h2>You are on the Steps page</h2>
      <p> {user.uid} </p>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step One: Save $1,000 for Emergency Fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step1 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete1')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete1')}>Mark Incomplete</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Two: Pay off all Non-Mortgage Debt.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step2 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete2')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete2')}>Mark Incomplete</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Three: Save 6 months of living expenses in an Emergency Fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step3 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete3')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete3')}>Mark Incomplete</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Four: Invest 15% of income into retirement savings.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step4 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete4')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete4')}>Mark Incomplete</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Five: Save for your children&apos;s college fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step5 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete5')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete5')}>Mark Incomplete</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Six: Pay off the house early.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step6 === 'true' ? 'Completed' : 'Not Completed' }</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete6')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete6')}>Mark Incomplete</Button>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Step Seven: Build wealth and give</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step7 === 'true' ? 'Completed' : 'Not Completed'}</CardSubtitle>
          <Button className='mt-1' color='info' onClick={() => handleClick('complete7')}>Mark Complete</Button>
          <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete7')}>Mark Incomplete</Button>
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
