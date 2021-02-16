import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CapaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  border: 10px solid yellow;
  inline-size: auto;
  text-align: ${({ theme }) => theme.getBreakpointValue('center', 'start', 'right', 'center')}
`;
export default function Capa({ children }) {
  return (
    <CapaContainer>
      {children}
    </CapaContainer>
  );
}

Capa.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
