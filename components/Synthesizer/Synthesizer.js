import React from 'react';
import styled from 'styled-components';

import Fader from './../UI/Fader';
import WaveSelector from './../UI/WaveSelector';
import WAVEFORMS from  './../Synthesizer/WAVEFORMS';
import Oscillator from  './../Modules/Oscillator';

class Synthesizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency : 440,
      duration : 100
    }

    this.playSound = this.playSound.bind(this)
    this.update = this.update.bind(this)
  }

  componentDidMount() {
    window.audioContext = window.audioContext || new AudioContext();
  }

  playSound() {
    let oscillator = audioContext.createOscillator();
    oscillator.type = this.state.waveform;
    oscillator.frequency.value = this.state.frequency;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    window.setTimeout(oscillator.stop.bind(oscillator), this.state.duration);
  }

  update(state) {
    this.setState({
      waveform: state.waveform,
      frequency: state.frequency,
      duration: state.duration
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return(
    <div>
      <Layout>
        <Oscillator update={this.update} />
      </Layout>
    <button onClick={this.playSound}>Play!</button>
  </div>
  );
  }
}
const Layout = styled.div`
`
export default Synthesizer;
