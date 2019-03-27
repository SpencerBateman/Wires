import react from 'react';
import WAVEFORMS from './WAVEFORMS';

class Synthesizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      waveform : WAVEFORMS.SINE.id,
      frequency : 250,
      duration : 500
    }
    this.setWaveform = this.setWaveform.bind(this)
    this.setFrequency = this.setFrequency.bind(this)
    this.setDuration = this.setDuration.bind(this)
    this.playSound = this.playSound.bind(this)
  }

  componentDidMount() {
    window.audioContext = window.audioContext || new AudioContext();
  }

  setWaveform(e) {
    this.setState({waveform: e.target.value});
  }

  setFrequency(e) {
    this.setState({frequency : e.target.value});
  }

  setDuration(e) {
    this.setState({duration : e.target.value});
  }

  playSound() {
    let oscillator = audioContext.createOscillator();
    oscillator.type = this.state.waveform;
    oscillator.frequency.value = this.state.frequency;

    oscillator.connect(audioContext.destination);

    oscillator.start();
    window.setTimeout(oscillator.stop.bind(oscillator), this.state.duration)
  }

  render() {
    return (
      <div>
        <h1>A simple web audio synthesizer</h1>
        <p>Play with the dropdowns and hit 'play' to create a tone</p>
        <div className="control">
          <label htmlFor="waveform">Waveform</label>
          <select id="waveform" value={this.state.waveform} onChange={this.setWaveform}>
            <option value={WAVEFORMS.SINE.id}>{WAVEFORMS.SINE.userTerm}</option>
            <option value={WAVEFORMS.SAWTOOTH.id}>{WAVEFORMS.SAWTOOTH.userTerm}</option>
            <option value={WAVEFORMS.TRIANGLE.id}>{WAVEFORMS.TRIANGLE.userTerm}</option>
            <option value={WAVEFORMS.SQUARE.id}>{WAVEFORMS.SQUARE.userTerm}</option>
          </select>
        </div>

        <div className="control">
          <label htmlFor="frequency">Frequency</label>
          <input id="frequency" type="text" value={this.state.frequency} onChange={this.setFrequency}></input>
        </div>

        <div className="control">
          <label htmlFor="duration">Duration (milliseconds)</label>
          <input id="duration" type="text" value={this.state.duration} onChange={this.setDuration}></input>
        </div>

        <button onClick={this.playSound}>Play!</button>
      </div>
    )
  }
}

export default Synthesizer;
