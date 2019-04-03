import React from 'react';
import styled from 'styled-components';

import WAVEFORMS from  './../Synthesizer/WAVEFORMS';
import Oscillator from  './../Modules/Oscillator';
import Amp from  './../Modules/Amp';
import Lesson from '../../data/Lesson1';

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
    window.setInterval(() => {
      let oscillator = audioContext.createOscillator();
      let gain = audioContext.createGain();
      oscillator.type = this.state.waveform;
      oscillator.frequency.value = this.state.frequency;
      gain.gain.value = this.state.gain;
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      let now = audioContext.currentTime;
      oscillator.start(now);
      oscillator.stop(now + .2);
    }, 300);
  }


  update(state) {
    this.setState({
      waveform: state.waveform,
      frequency: state.frequency,
      duration: state.duration,
      ON: state.ON
    }, () => {
    })
  }

  setGain(state) {
    this.setState({
      gain: state.gain
    }, () => {
    })
  }

  render() {
    const Modules = Lesson['Module'].map((moduleId) => {
      if (moduleId == 1) {
        return(
          <Oscillator ON={this.state.ON} update={this.update} />
        );
      }
      if (moduleId == 2) {
        return(
        <Amp update={this.setGain}/>
        );
      }
    });
    return(
      <div>
        <Layout>
          <LessonTitle>{Lesson['Title']}</LessonTitle>
          {Modules}
        </Layout>
        <button onClick={this.playSound}>Play!</button>
      </div>
    );
  }
}
const Layout = styled.div`
`
const LessonTitle = styled.h1`

`
export default Synthesizer;
