import React from 'react';
import styled from 'styled-components';

class OnSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this)
  }

  toggle = () => {
    this.props.toggle()
  }

  render() {
    return(
      <Light ON={this.props.ON} onClick={this.toggle}/>
    );
  }
}

const Light = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background: ${props => props.ON ? props.theme.AccentColor: props.theme.AccentColorDeactivated};

  &:hover {
    cursor: pointer;
  }
`
export default OnSwitch;

