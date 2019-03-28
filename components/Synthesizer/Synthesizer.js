import React from 'react';
import styled from 'styled-components';

import WAVEFORMS from  './../Synthesizer/WAVEFORMS';
import Oscillator from  './../Modules/Oscillator';
import Amp from  './../Modules/Amp';

class Synthesizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency : 440,
      duration : 100,
      gain: 10,
      ON: true
    }
    this.playSound = this.playSound.bind(this)
    this.update = this.update.bind(this)
    this.setGain = this.setGain.bind(this)
  }

  componentDidMount() {
    window.audioContext = window.audioContext || new AudioContext();

  }

  playSound(buffer, time) {
    let oscillator = audioContext.createOscillator();
    oscillator.type = this.state.waveform;
    oscillator.frequency.value = this.state.frequency;
    oscillator.connect(audioContext.destination);
    let now = audioContext.currentTime;
    if (this.state.ON) {
      oscillator.start(now);
      oscillator.stop(now + .5);
    }
    ////window.setTimeout(oscillator.stop.bind(oscillator), this.state.duration);
  }

  update(state) {
    this.setState({
      waveform: state.waveform,
      frequency: state.frequency,
      duration: state.duration,
      ON: state.ON
    }, () => {
      console.log(this.state)
    })
  }

  setGain(state) {
    this.setState({
      gain: state.gain
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return(
    <div>
      <Layout>
        <Oscillator ON={this.state.ON} update={this.update} />
        <Amp update={this.setGain}/>
      </Layout>
    <button onClick={this.playSound}>Play!</button>
  </div>
  );
  }
}
const Layout = styled.div`
`
export default Synthesizer;
