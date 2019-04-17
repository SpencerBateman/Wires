import React from 'react';
import styled from 'styled-components';

class Complete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Frame>
          <SynthName>Complete!</SynthName>
        </Frame>
      </div>
    );
  }
}

const SynthName = styled.div`
  font-size: 20px;
  grid-row: 1;
  grid-column: 1;
  font-family: 'Work Sans',sans-serif;
  text-transform: Uppercase;
  margin: 0 0 0 20px;
`

const Frame = styled.div`
  border-radius: 10px;
  border: 3px solid black;
  display: Grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 50px 250px;
  align-items: center;
  background: #fcfcfc;
`

export default Complete;
