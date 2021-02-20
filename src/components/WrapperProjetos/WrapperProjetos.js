import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const WrapperProjetosContainer = styled.div`
  width: 100%;
  border: 1px solid;
`;
export default function WrapperProjetos({ children }) {
  return (
    <WrapperProjetosContainer>
      {children}
    </WrapperProjetosContainer>
  );
}

WrapperProjetos.propTypes = {
  children: node.isRequired,
};
