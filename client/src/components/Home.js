import React, { Fragment } from 'react';
import CoinForm from './CoinForm';
import CoinList from './CoinList';
import { Container } from 'semantic-ui-react';

const Home = () => (
  <Fragment>
    <Container>
      <CoinForm />
      <CoinList />
    </Container>
  </Fragment>
)


export default Home;
