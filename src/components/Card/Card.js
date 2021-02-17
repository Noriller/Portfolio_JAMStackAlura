import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export default function Card({ children }) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
}

Card.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
