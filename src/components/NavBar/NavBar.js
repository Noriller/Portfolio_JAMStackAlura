import { arrayOf, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
`;

const NavBarItem = styled.div`
  margin: 0 ${({ theme }) => theme.spacings.other};
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.small.xs, theme.baseSizes.small.md, theme.baseSizes.small.lg, theme.baseSizes.small.xl)}
`;
export default function NavBar({ items }) {
  return (
    <NavBarContainer>
      {
        items.map(
          (el) => (
            <NavBarItem key={el}>
              {el}
            </NavBarItem>
          ),
        )
      }
    </NavBarContainer>
  );
}

NavBar.propTypes = {
  items: arrayOf(string).isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
