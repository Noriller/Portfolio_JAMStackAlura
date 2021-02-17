import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  object-fit: cover;
`;
export default function CardImage({ src }) {
  return (
    <StyledImage
      src={src}
      alt="alt"
    />
  );
}

CardImage.propTypes = {
  src: string.isRequired,
};

// ${({ theme }) => theme.getBreakpointValue(theme.textSize.display, theme.textSize.title1, '')}
// ${insertMediaQuery(xs, md, xl)}
// import styled, { css } from 'styled-components';
