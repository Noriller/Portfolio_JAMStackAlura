import { node, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FooterIconContainer = styled.div`
  height: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  width: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  border: 1px solid;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function FooterIcon({ children, img }) {
  return (
    <FooterIconContainer>
      {children || img}
    </FooterIconContainer>
  );
}

FooterIcon.propTypes = {
  children: node.isRequired,
  img: string.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
