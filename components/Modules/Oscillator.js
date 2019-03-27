import React from 'react';
import styled from 'styled-components';

import Fader from './../UI/Fader';
import WaveSelector from './../UI/WaveSelector';
import WAVEFORMS from  './../Synthesizer/WAVEFORMS.js';

class Oscillator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency : 440,
      duration : 100
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateFrequency = this.updateFrequency.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      waveform: e
  }, () => {
    this.props.update(this.state)
  })
  }

  updateFrequency(e) {
    this.setState({frequency: e});
  }

  render() {
    return(
      <div>
        <Frame>
          <SynthName>Occ 1.0</SynthName>
          <Fader
            label="Pitch"
            GridColumn={1}
            min={250}
            max={4000}
            default={440}
            units="Hz"
            updateFrequency={this.updateFrequency}
          />
          <WaveSelector
            GridColumn={2}
            handleChange={this.handleChange}
          />
          <Fader
            label="Gain"
            GridColumn={3}
            min={-60}
            max={0}
            default={-10}
            units="dB"
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

export default Oscillator;
