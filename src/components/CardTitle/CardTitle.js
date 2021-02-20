import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardTitleContainer = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.small.xs, theme.baseSizes.small.md, theme.baseSizes.small.lg, theme.baseSizes.small.xl)};
  width: 70%;
  padding: 1em 0;
  border: 1px solid;
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
