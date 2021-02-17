import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardTextContainer = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.text.xs, theme.baseSizes.text.md, theme.baseSizes.text.lg, theme.baseSizes.text.xl)}
`;

export default function CardText({ children }) {
  return (
    <CardTextContainer>
      {children}
    </CardTextContainer>
  );
}

CardText.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
