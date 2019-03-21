import React from 'react';
import styled from 'styled-components';

import Fader from './Fader';
import WaveSelector from './WaveSelector';

class Occilator extends React.Component {
  render() {
    return(
    <Frame>
      <Fader label="Pitch" GridColumn="1" min={30} max={22000} default={440} units="Hz" />
      <WaveSelector GridColumn="2" />
      <Fader label="Gain" GridColumn="3" min={-60} max={0} default={-10} units="dB" />
    </Frame>
    );
  }
}

const Frame = styled.div`
  border-radius: 10px;
  border: 3px solid black;
  display: Grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 250px;
  align-items: center;
  background: #fcfcfc;
`

export default Occilator;
