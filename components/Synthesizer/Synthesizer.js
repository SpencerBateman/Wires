import React from 'react';
import styled, { css } from 'styled-components';

import WAVEFORMS from  './../Synthesizer/WAVEFORMS';
import Oscillator from  './../Modules/Oscillator';
import Amp from  './../Modules/Amp';
import Complete from './../Modules/Complete';
import TextBox from './../Modules/TextBox';

import Lesson from '../../data/Lesson1';

class Synthesizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform: WAVEFORMS.SINE.id,
      frequency: 440,
      duration: 100,
      gain: 1,
      playing: false,
      targetFrequency: 0,
      section: 0
    }

    this.playSound = this.playSound.bind(this)
    this.stopSound = this.stopSound.bind(this)
    this.update = this.update.bind(this)
    this.setGain = this.setGain.bind(this)
    this.progress = this.progress.bind(this)
  }

  componentDidMount() {
    window.audioContext = window.audioContext || new AudioContext();
    Lesson['Sections'].map((object) => {
      if (object['Module'] == 0) {
        this.setState({targetFrequency: object['State']});
      }
    });
  }

  playSound(buffer, time) {
    if (!this.state.playing) {
      let interval = window.setInterval(() => {
        let oscillator = audioContext.createOscillator();
        let gain = audioContext.createGain();
        oscillator.type = this.state.waveform;
        console.log(this.state.frequency)
        oscillator.frequency.value = this.state.frequency;
        gain.gain.value = this.state.gain;
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        let now = audioContext.currentTime;
        oscillator.start(now);
        oscillator.stop(now + .2);
      }, 800);
      this.setState({
        interval: interval,
        playing: true
      });
    }
  }

  stopSound() {
    window.clearInterval(this.state.interval)
    this.setState({
      playing: false
    });
  }

  setGain(state) {
    this.setState({gain: state.gain})
  }

  update(state) {
    if (state.frequency) {
      this.setState({
        frequency: state.frequency
      })
    }

      this.setState({
        waveform: state.waveform
      })
  }

  progress() {
    let section = this.state.section;

    if (section == 1 && this.state.targetFrequency < this.state.frequency) {
      section += 1;
    } else if (section == 2 && this.state.waveform == 'triangle') {
      section += 1;
    } else if (section == 0 && this.state.playing) {
      section += 1;
    }

    this.setState({
      section: section
    }, () => {
      console.log(this.state.section)
    });

  }


  render() {
    let module;
    let subtitle;

    let title = Lesson['Sections'][this.state.section].Title
    let text = Lesson['Sections'][this.state.section].Text

    module = <Oscillator update={this.update} />

    //if (Lesson['Sections'][this.state.section]['Module'] == 1) {
    //module = <Amp update={this.setGain} />
    //subtitle = <Text>{text}</Text>
    //}

    //if (Lesson['Sections'][this.state.section]['Module'] == 2) {
    //module = <Complete />
    //subtitle = <Text>{text}</Text>
    //}

    //if (Lesson['Sections'][this.state.section]['Module'] == 3) {
    //module =
    //<div>
    //<Title title={title} />
    //<TextBox text={text}/>
    //<button onClick={this.update}>Next</button>
    //</div>
    //}

    function Title(props) {
      return <LessonTitle>{props.title}</LessonTitle>;
    }

    return(
      <div>
        <Layout>
          <Title title={title} />
          <TextBox text={text} />
          {module}
          <ButtonRow>
            <Button green onClick={this.playSound}>Start Oscillator</Button>
            <Button red onClick={this.stopSound}>Stop Oscillator</Button>
            <Button onClick={this.progress}>Next</Button>
          </ButtonRow>
        </Layout>
      </div>
    );
  }
}

const Layout = styled.div`
max-width: 600px;
`
const ButtonRow = styled.div`
  display: grid;
  grid-template-columns: 170px 170px 170px;
  justify-content: space-between;
  margin: 10px 0;
`
const Text = styled.p`
font-family: 'Work Sans',sans-serif;
margin: 10px auto;
max-width: 650px;
`
const LessonTitle = styled.h1`
font-family: 'Work Sans',sans-serif;
font-size: 20px;
`
const Button = styled.button`
${props => props.green && css`
  background: #4db750;
  `}
${props => props.red && css`
  background:#ea8a77;
  `}
height: 40px;
font-family: 'Work Sans',sans-serif;
font-size: 20px;

&:hover {
  cursor: pointer;
}
`
export default Synthesizer;
