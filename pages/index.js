import React from 'react';
import styled from 'styled-components';
import {Reset} from 'styled-reset';

import Occilator from './../components/Occilator.js';


class Home extends React.Component {
  render() {
    return(
      <Container>
        <Reset />
        <Occilator />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;

`

export default Home
