import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
export default function SectionTitle({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

SectionTitle.propTypes = {
  children: node.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
