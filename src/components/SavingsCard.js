import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteSaving } from '../helpers/data/savingsData';
import SavingsForm from './SavingsForm';

function SavingsCard({
  firebaseKey,
  title,
  savedAmount,
  targetAmount,
  savingType,
  user,
  setSavings
}) {
  const [editing, setEditing] = useState(false);

  const isCompleted = () => (
    <>
    <CardText>Completed: True</CardText>
    </>
  );

  const isNotCompleted = () => (
    <>
    <CardText>Completed: False</CardText>
    </>
  );

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteSaving(firebaseKey, user.uid).then(setSavings);
        break;
      default: console.warn('nothing selected');
    }
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">
            Target Amount: {targetAmount}</CardSubtitle>
          <CardText>Amount Saved: {savedAmount}</CardText>
          <CardText>Saving Type: {savingType}</CardText>
          {
            (savedAmount >= targetAmount) ? isCompleted() : isNotCompleted()
          }
          <Button className='mt-1' color='info' onClick={() => handleClick('edit')}> {editing ? 'Close' : 'Edit'}
          </Button>
          {
            editing && <SavingsForm
            firebaseKey={firebaseKey}
            formTitle={'Edit'}
            title={title}
            savedAmount={savedAmount}
            targetAmount={targetAmount}
            savingType={savingType}
            user={user}
            setSavings={setSavings}
            />
          }
          <br />
          <Button className='mt-1' color='danger' onClick={() => handleClick('delete')}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
}

SavingsCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  savedAmount: PropTypes.any.isRequired,
  targetAmount: PropTypes.any.isRequired,
  savingType: PropTypes.string.isRequired,
  user: PropTypes.any,
  setSavings: PropTypes.func.isRequired
};

export default SavingsCard;
