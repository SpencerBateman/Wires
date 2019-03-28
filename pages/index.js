import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Synthesizer from './../components/Synthesizer/Synthesizer'

// Global Theme
const theme = {
  AccentColor: "#1263e5",
  AccentColorDeactivated: "#556277"
};


class Home extends React.Component {
  render() {
    return(
      <Container>
        <Reset />
        <ThemeProvider theme={theme}>
          <Synthesizer />
        </ThemeProvider>
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
