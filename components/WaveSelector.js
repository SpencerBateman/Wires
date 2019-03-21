import React from 'react';
import styled from 'styled-components';

class WaveSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wave: "Sine"
    }
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange(wave) {
    console.log(wave)
    this.setState({
      wave: wave
    })
  }

  render() {
    return(
      <div>
        <WaveTitle>{this.state.wave}</WaveTitle>
      <ButtonContainer>
        <WaveButton
          selected={this.state.wave == "Sine"}
          onClick={() => this.handlerChange("Sine")}
          dangerouslySetInnerHTML={{__html: "Sine"}}
        />
        <WaveButton
          selected={this.state.wave == "Saw"}
          onClick={() => this.handlerChange("Saw")}
          dangerouslySetInnerHTML={{__html: "Saw"}}
        />
        <WaveButton
          selected={this.state.wave == "Square"}
          onClick={() => this.handlerChange("Square")}
          dangerouslySetInnerHTML={{__html: "Square"}}
        />
        <WaveButton
          selected={this.state.wave == "Triangle"}
          onClick={() => this.handlerChange("Triangle")}
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
