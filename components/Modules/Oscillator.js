import React from 'react';
import styled from 'styled-components';

import Fader from './../UI/Fader';
import WaveSelector from './../UI/WaveSelector';
import WAVEFORMS from  './../Synthesizer/WAVEFORMS';
import OnSwitch from './../UI/OnSwitch';

class Oscillator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency : 440,
      duration : 100,
      version: '1.1',
      ON: this.props.ON

    }
    this.handleChange = this.handleChange.bind(this)
    this.updateFrequency = this.updateFrequency.bind(this)
    this.handleOnOff = this.handleOnOff.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      waveform: e
  }, () => {
    this.props.update(this.state)
  })
  }

  updateFrequency(e) {
    this.setState({
      frequency: e
    }, () => {;
      this.props.update(this.state)
    })
  }

  handleOnOff(e) {
    this.setState({
      ON: !this.state.ON
    }, () => {
      this.props.update(this.state)
    })
  };

  render() {
    return(
      <div>
        <Frame>
          <SynthName>Occ {this.state.version}</SynthName>
          <OnSwitch ON={this.state.ON} toggle={this.handleOnOff} />
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
grid-template-columns: 300px 300px;
grid-template-rows: 50px 250px;
align-items: center;
background: #fcfcfc;
`

export default Oscillator;
