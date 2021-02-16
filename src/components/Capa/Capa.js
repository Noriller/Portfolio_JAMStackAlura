import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CapaContainer = styled.div`
  width: 100vw;
  height: 100vh;
  border: 10px solid;
  inline-size: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CapaTitle = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.big.xs, theme.baseSizes.big.md, theme.baseSizes.big.lg, theme.baseSizes.big.xl)}
`;
const CapaSubtitle = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.small.xs, theme.baseSizes.small.md, theme.baseSizes.small.lg, theme.baseSizes.small.xl)}
`;
export default function Capa({ title, subtitle }) {
  return (
    <CapaContainer>
      <CapaTitle>
        {title}
      </CapaTitle>
      {subtitle ? (
        <CapaSubtitle>
          {subtitle}
        </CapaSubtitle>
      ) : null}
    </CapaContainer>
  );
}

Capa.propTypes = {
  title: string.isRequired,
  subtitle: string,
};

Capa.defaultProps = {
  subtitle: null,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
