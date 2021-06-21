import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteIncome } from '../helpers/data/incomeData';
import IncomeForm from './IncomeForm';

function IncomeCard({
  firebaseKey,
  title,
  amount,
  payDate,
  incomeType,
  user,
  setIncomes
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteIncome(firebaseKey, user.uid).then(setIncomes);
        break;
      default: console.warn('nothing selected');
    }
  };

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <CardText>Income Amount: {amount}</CardText>
          <CardText>Pay Date: {payDate}</CardText>
          <CardText>Income Type: {incomeType}</CardText>
          <Button className='mt-1' color='info' onClick={() => handleClick('edit')}> {editing ? 'Close' : 'Edit'}
          </Button>
          {
            editing && <IncomeForm
            formTitle={'Edit Income'}
            setIncomes={setIncomes}
            firebaseKey={firebaseKey}
            title={title}
            amount={amount}
            payDate={payDate}
            incomeType={incomeType}
            user={user}
            />
          }
          <br />
          <Button className='mt-1' color='danger' onClick={() => handleClick('delete')}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
}

IncomeCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.any.isRequired,
  payDate: PropTypes.string.isRequired,
  incomeType: PropTypes.string.isRequired,
  user: PropTypes.any,
  setIncomes: PropTypes.func
};

export default IncomeCard;
