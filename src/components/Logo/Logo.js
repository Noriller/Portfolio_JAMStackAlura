import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  border: 1px solid;
  border-radius: 50%;
  height: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  width: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  overflow: hidden;
  position: relative;
  display: inline-block;
  background-image: url("/BrunoHope.jpg");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 105%;
  padding: 1.5em
`;

export default function Logo() {
  return (
    <LogoContainer />
  );
}
