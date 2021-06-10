import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

function IncomeCard({
  firebaseKey,
  title,
  amount,
  payDate,
  incomeType,
  user
}) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">{title}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">{amount}</CardSubtitle>
          <CardText>{payDate} {incomeType}</CardText>
          <CardText>{firebaseKey} {user.uid}</CardText>
          <Button> Btn </Button>
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
  user: PropTypes.any
};

export default IncomeCard;
