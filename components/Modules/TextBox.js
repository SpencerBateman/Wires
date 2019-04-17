import React from 'react';
import styled from 'styled-components';

class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Text>{this.props.text}</Text>
    );
  }
}

const Text = styled.p`
  font-size: 20px;
  grid-row: 1;
  grid-column: 1;
  line-height: 1.3;
  font-family: 'Work Sans',sans-serif;
  margin: 30px 0;
`
export default TextBox;
