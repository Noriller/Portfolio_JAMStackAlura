import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: ${({ theme }) => theme.spacings.minimum};
  display: flex;
  flex-direction: column;
  border: 2px solid;
`;
export default function Card({ children }) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
}

Card.propTypes = {
  children: node.isRequired,
};
