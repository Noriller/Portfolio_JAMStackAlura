import { node } from 'prop-types';
import React from 'react';

export default function Cabecalho({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

Cabecalho.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${inserMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
