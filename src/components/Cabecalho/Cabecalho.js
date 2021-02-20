import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CabecalhoContainer = styled.div`
  width: 100%;
  border: 1px solid;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;
`;

export default function Cabecalho({ children }) {
  return (
    <CabecalhoContainer>
      {children}
    </CabecalhoContainer>
  );
}

Cabecalho.propTypes = {
  children: node.isRequired,
};
