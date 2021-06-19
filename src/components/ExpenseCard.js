import React, { useState } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import { deleteExpense } from '../helpers/data/expenseData';

function ExpenseCard({
  firebaseKey,
  title,
  amount,
  dueDate,
  expenseType,
  user,
  setExpenses
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteExpense(firebaseKey, user.uid).then(setExpenses);
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
            Expense Amount: {amount}</CardSubtitle>
          <CardText>{dueDate} {expenseType}</CardText>
          <Button className='mt-1' color='info' onClick={() => handleClick('edit')}> {editing ? 'Close' : 'Edit'}
          </Button>
          {
            editing && <ExpenseForm
            firebaseKey={firebaseKey}
            formTitle={'Edit Expense'}
            title={title}
            amount={amount}
            dueDate={dueDate}
            expenseType={expenseType}
            user={user}
            setExpenses={setExpenses}
            />
          }
          <br />
          <Button className='mt-1' color='danger' onClick={() => handleClick('delete')}>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
}

ExpenseCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.any.isRequired,
  dueDate: PropTypes.string.isRequired,
  expenseType: PropTypes.string.isRequired,
  user: PropTypes.any,
  setExpenses: PropTypes.func
};

export default ExpenseCard;
