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
