import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Slider from 'react-rangeslider'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

.rangeslider {
  margin: 20px 0;
  position: relative;
  background: #54ea5e;
  -ms-touch-action: none;
  touch-action: none;

  &,
  .rangeslider__fill {
    display: block;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
  }
  .rangeslider__handle {
    background: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);
    .rangeslider__active {
      opacity: 1;
    }
  }

  .rangeslider__handle-tooltip {
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    font-weight: normal;
    font-size: 14px;
    transition: all 100ms ease-in;
    border-radius: 4px;
    display: inline-block;
    color: white;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    span {
      margin-top: 12px;
      display: inline-block;
      line-height: 100%;
    }
    &:after {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
    }
  }
}

/**
* Rangeslider - Vertical slider
*/
.rangeslider-vertical {
  margin: 20px auto;
  height: 150px;
  max-width: 10px;
  background-color: transparent;

  .rangeslider__fill,
  .rangeslider__handle {
    position: absolute;
  }

  .rangeslider__fill {
    width: 100%;
    background-color: #54ea5e;
    box-shadow: none;
    bottom: 0;
  }
  .rangeslider__handle {
    width: 30px;
    height: 10px;
    left: -10px;
    box-shadow: none;
  }
  .rangeslider__handle-tooltip {
    left: -100%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    &:after {
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid rgba(0, 0, 0, 0.8);
      left: 100%;
      top: 12px;
    }
  }
}

`

class Fader extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      min: props.min,
      max: props.max,
      value: props.default,
      units: props.units
    }
  }

  handleOnChange = (value) => {
    this.setState({
      value: value
    });
  }


  render() {
    let value = this.state.value
    let min = this.state.min
    let max = this.state.max
    let units = this.state.units
    return(
      <Container>
        <Label>
          {this.props.label} {value} {units}
        </Label>
        <GlobalStyle />
        <Slider
          value={value}
          orientation="vertical"
          onChange={this.handleOnChange}
          min={min}
          max={max}
          tooltip={false}
        />

      </Container>
    );
  }
}

const Container = styled.div`
grid-column: ${props => props.GridColumn}
`

const Label = styled.p`
font-family: 'Work Sans', sans-serif;
text-align: center;
`

const Touch = styled.div`
  width: 100%;
  height: 10px;
  background: grey;
  position: absolute;
`

export default Fader;
