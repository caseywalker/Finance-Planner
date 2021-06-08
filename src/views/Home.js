import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

function Home({ user }) {
  const authenticated = () => (
    <>
    <CardText>Get started by adding incomes and expenses</CardText>
    <Button color='danger' onClick={signOutUser}> Sign Out </Button>
    </>
  );

  const notAuthenticated = () => (
    <>
    <CardText>Sign in to start using the app</CardText>
    <Button color='info' onClick={signInUser}> Sign In </Button>
    </>
  );

  return (
    <div>
      <Card className='home-card'>
        <CardBody>
          <CardTitle tag="h5">Finance Planner</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">An app that helps you budget and plan for your financial success.</CardSubtitle>
          <CardText>Finance Planner was developed to allow you to track your income, expenses, and savings goals. You may also compare your monthly income and expenses from a single view within the Tracker, and simulate changes to your income or expenses in the Simulator.</CardText>
          { user ? authenticated() : notAuthenticated() }
        </CardBody>
      </Card>

    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
