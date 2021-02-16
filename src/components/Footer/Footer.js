import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  border: 1px solid;
  background-color: green;
`;

export default function Footer({ children }) {
  return (
    <FooterContainer>
      {children}
    </FooterContainer>
  );
}

Footer.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
