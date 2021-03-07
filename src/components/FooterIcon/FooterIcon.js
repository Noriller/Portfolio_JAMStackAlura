import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const FooterIconContainer = styled.div`
  height: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  width: ${({ theme }) => theme.getBreakpointValue(theme.baseSizes.medium.xs, theme.baseSizes.medium.md, theme.baseSizes.medium.lg, theme.baseSizes.medium.xl)};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GithubVariant = styled(FooterIconContainer)`
  background-image: url("/Octocat.png");
  background-color: white;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 105%;
`;

const LinkedinVariant = styled(FooterIconContainer)`
  background-image: url("/LI-In-Bug.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 105%;
  border-radius: 0;
`;

const MailVariant = styled(FooterIconContainer)`
  background-image: url("/mail.png");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 105%;
  border-radius: 0;
  filter: ${({ theme }) => ((theme.theme === 'dark') ? 'invert(1)' : null)}
`;

const Default = styled(FooterIconContainer)`
  background-image: url("/BrunoHope.jpg");
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 105%;
`;
export default function FooterIcon({ variant }) {
  if (variant === 'Github') {
    return <GithubVariant />;
  }

  if (variant === 'Linkedin') {
    return <LinkedinVariant />;
  }

  if (variant === 'mail') {
    return <MailVariant />;
  }

  return <Default />;
}

FooterIcon.propTypes = {
  variant: string.isRequired,
};
