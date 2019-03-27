import React from 'react';
import styled from 'styled-components';

import Fader from './Fader';
import WaveSelector from './WaveSelector';
import WAVEFORMS from  './WAVEFORMS.js';

class Occilator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency : 440,
      duration : 100
    }

    this.handleChange = this.handleChange.bind(this)
    this.updateFrequency = this.updateFrequency.bind(this)
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount() {
    window.audioContext = window.audioContext || new AudioContext();
  }

  handleChange(e) {
    this.setState({waveform: e});
  }

  updateFrequency(e) {
    this.setState({frequency: e});
  }

  playSound() {
    let oscillator = audioContext.createOscillator();
    oscillator.type = this.state.waveform;
    oscillator.frequency.value = this.state.frequency;

    oscillator.connect(audioContext.destination);

    oscillator.start();
    window.setTimeout(oscillator.stop.bind(oscillator), this.state.duration);
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
        <button onClick={this.playSound}>Play!</button>
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

export default Occilator;
