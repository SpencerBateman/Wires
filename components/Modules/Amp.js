import React from 'react';
import styled from 'styled-components';

import Fader from './../UI/Fader';

class Amp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gain: 0
    }

    this.updateGain = this.updateGain.bind(this)
  }

  updateGain = (gain) => {
    this.setState({
      gain: gain
  }, () => {
    this.props.update(this.state)
  })
  }

  render() {
    return(
      <div>
        <Frame>
          <SynthName>Fader 1.0</SynthName>
          <Fader
            label="Gain"
            min={0}
            max={20}
            default={0}
            units="dB"
            updateFrequency={this.updateGain}
          />
        </Frame>
      </div>
    );
  }
}

const SynthName = styled.div`
  font-size: 20px;
  grid-row: 1;
  grid-column: 1;
  font-family: 'Work Sans',sans-serif;
  text-transform: Uppercase;
  margin: 0 0 0 20px;
`

const Frame = styled.div`
  border-radius: 10px;
  border: 3px solid black;
  display: Grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 50px 250px;
  align-items: center;
  background: #fcfcfc;
`

export default Amp;

