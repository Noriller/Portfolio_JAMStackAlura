import Link from 'next/link';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FormCadastro from '../FormCadastro/FormCadastro';

const NavBarContainer = styled.div`
  display: flex;
`;

const NavBarItem = styled.div`
  margin: 0 ${({ theme }) => theme.spacings.other};
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.small.xs, theme.baseSizes.small.md, theme.baseSizes.small.lg, theme.baseSizes.small.xl)};

  a:link, a:visited, a:hover, a:active {
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.textContrast};
  }
`;

const StyledLink = styled.a`
`;
export default function NavBar({ items }) {
  return (
    <NavBarContainer>
      {
        items.map(
          (el) => (
            <NavBarItem key={el.target}>
              <StyledLink as={Link} href={el.href}>
                {el.target}
              </StyledLink>
            </NavBarItem>
          ),
        )
      }
      <FormCadastro />
    </NavBarContainer>
  );
}

NavBar.propTypes = {
  items: arrayOf(shape({
    target: string.isRequired,
    href: string.isRequired,
  })).isRequired,
};
