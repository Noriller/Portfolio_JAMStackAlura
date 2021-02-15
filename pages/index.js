import React from 'react';
import styled, { css } from 'styled-components';
import inserMediaQuery from '../src/Theme/ThemeComponents/MediaBreakpoints';

const xs = css`
  color: green
`;
const md = css`
  color: yellow
`;
const xl = css`
  color: pink
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.headings.medium, theme.headings.small, '')}px;
  color: ${({ theme }) => theme.colors.primary};
  ${inserMediaQuery(xs, md, xl)}
`;

const newLocal = inserMediaQuery(css`color: red`, '', null);
const NewDiv = styled.div`
  font-size: ${({ theme }) => theme.getBreakpointValue(theme.paragraphs.small, theme.paragraphs.medium, null)}px;
  ${newLocal}
`;

export default function Home() {
  return (
    <div>
      <Title>My page</Title>
      <NewDiv>
        lorem ipsum dolor sit amet,
        consectetur adipiscing elit,
        sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
        Ut enim adipiscing.
      </NewDiv>
    </div>
  );
}
