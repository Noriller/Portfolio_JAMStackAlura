import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  border: 1px solid;
  background-color: red;
  border-radius: 50%;
  height: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  width: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
`;

export default function Logo() {
  return (
    <LogoContainer />
  );
}

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
