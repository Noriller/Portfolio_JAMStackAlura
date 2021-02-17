import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SectionTitleContainer = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  width: 70vw;
  padding: 0.5em 0;
  border: 2px solid;
  inline-size: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function SectionTitle({ children }) {
  return (
    <SectionTitleContainer>
      {children}
    </SectionTitleContainer>
  );
}

SectionTitle.propTypes = {
  children: node.isRequired,
};
