import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardsWrapperContainer = styled.div`
  min-width: 70%;
  max-width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export default function CardsWrapper({ children }) {
  return (
    <CardsWrapperContainer>
      {children}
    </CardsWrapperContainer>
  );
}

CardsWrapper.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
