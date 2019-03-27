import React from 'react';
import styled from 'styled-components';

class WaveSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wave: "sine"
    }
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange = (wave) => {
    this.setState({
      wave: wave
  }, () => {
    this.props.handleChange(this.state.wave)
  })
  }

  render() {
    return(
      <div>
        <WaveTitle>{this.state.wave}</WaveTitle>
      <ButtonContainer>
        <WaveButton
          selected={this.state.wave == "sine"}
          onClick={() => this.handlerChange("sine")}
          dangerouslySetInnerHTML={{__html: "Sine"}}
        />
        <WaveButton
          selected={this.state.wave == "sawtooth"}
          onClick={() => this.handlerChange("sawtooth")}
          dangerouslySetInnerHTML={{__html: "Saw"}}
        />
        <WaveButton
          selected={this.state.wave == "square"}
          onClick={() => this.handlerChange("square")}
          dangerouslySetInnerHTML={{__html: "Square"}}
        />
        <WaveButton
          selected={this.state.wave == "triangle"}
          onClick={() => this.handlerChange("triangle")}
          dangerouslySetInnerHTML={{__html: "Triangle"}}
        />
      </ButtonContainer>
    </div>
    );
  }
}

const WaveTitle = styled.div`
  text-align: center;
  font-family: 'Work Sans', sans-serif;
`

const ButtonContainer = styled.div`
  display: grid;
  width: 200px;
  grid-template-columns: 35% 35%;
  grid-template-rows: 100px 100px;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
`
 const WaveButton = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.selected ? '#54ea5e' : '#95a897'};
  font-family: 'Work Sans', sans-serif;
  color: white;
  text-align: center;
  line-height: 80px;

  &:hover {
    cursor: pointer;
  }
`
export default WaveSelector;
