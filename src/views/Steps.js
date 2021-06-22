import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { updateSteps } from '../helpers/data/stepsData';

function Steps({ user, steps, setSteps }) {
  const [localSteps, setLocalSteps] = useState({
    firebaseKey: steps.firebaseKey || null,
    step1: steps.step1 || 'false',
    step2: steps.step2 || 'false',
    step3: steps.step3 || 'false',
    step4: steps.step4 || 'false',
    step5: steps.step5 || 'false',
    step6: steps.step6 || 'false',
    step7: steps.step7 || 'false',
    uid: user.uid
  });
  console.warn(steps.firebaseKey);
  console.warn(setSteps);

  const handleClick = (type) => {
    switch (type) {
      case 'complete1':
        setLocalSteps((prevState) => ({
          ...prevState,
          step1: 'true'
        }));
        // updateSteps(localSteps).then((stepObj) => setSteps(stepObj[0]));
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

  const handleSave = (e) => {
    e.preventDefault();
    updateSteps(localSteps).then((stepObj) => setSteps(stepObj[0]));
  };

  return (
    <div className='steps-container'>
      <h2>You are on the Steps page</h2>
      <Button className='mt-1 save-button' color='success' onClick={handleSave}>
        Save Changes</Button>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step One: Save $1,000 for Emergency Fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step1 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step1 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete1')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete1')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step Two: Pay off all Non-Mortgage Debt.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step2 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step2 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete2')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete2')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step Three: Save 6 months of living expenses in an Emergency Fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step3 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step3 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete3')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete3')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step Four: Invest 15% of income into retirement savings.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step4 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step4 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete4')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete4')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step Five: Save for your children&apos;s college fund.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step5 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step5 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete5')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete5')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step Six: Pay off the house early.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step6 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step6 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete6')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete6')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
      <Card className='step-card'>
        <CardBody>
          <CardTitle tag="h5">Step Seven: Build wealth and give</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{ localSteps.step7 === 'true' ? 'Completed' : 'Incomplete' }</CardSubtitle>
          {
            localSteps.step7 === 'false'
              ? <Button className='mt-1' color='info' onClick={() => handleClick('complete7')}>Mark Complete</Button>
              : <Button className='mt-1' color='danger' onClick={() => handleIncomplete('incomplete7')}>Mark Incomplete</Button>
          }
        </CardBody>
      </Card>
    </div>
  );
}

Steps.propTypes = {
  user: PropTypes.any.isRequired,
  steps: PropTypes.any,
  setSteps: PropTypes.func
};

export default Steps;
