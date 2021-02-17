import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardTitleContainer = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.small.xs, theme.baseSizes.small.md, theme.baseSizes.small.lg, theme.baseSizes.small.xl)};
  width: 70%;
  padding: 0.5em 0;
  border: 2px solid;
  inline-size: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function CardTitle({ children }) {
  return (
    <CardTitleContainer>
      {children}
    </CardTitleContainer>
  );
}

CardTitle.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
