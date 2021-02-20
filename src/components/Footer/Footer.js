import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0
`;

const IconsContainer = styled.div`
  width: clamp(30%, 40%, 70%);
  display: flex;
  justify-content: space-evenly;
`;

export default function Footer({ children }) {
  return (
    <FooterContainer>
      <IconsContainer>
        {children}
      </IconsContainer>
    </FooterContainer>
  );
}

Footer.propTypes = {
  children: node.isRequired,
};
