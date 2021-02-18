import { node } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const CardsWrapperContainer = styled.div`
  width: ${({ theme }) => theme.getBreakpointValue('90%', '70%', '', '50%')};
  margin: auto;
`;

const DestaqueWrapper = styled.div`
  background-color: green;
`;
const OthersWrapper = styled.div`
  background-color: red;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  & > * {
    background: blue;
    flex: 1 1;
    min-width: ${({ theme }) => theme.getBreakpointValue('calc(100% - 16px)', 'calc(50% - 16px)', 'calc(30% - 16px)')};
    max-width: ${({ theme }) => theme.getBreakpointValue('calc(100% - 16px)', 'calc(50% - 16px)', 'calc(40% - 16px)')};
  }
`;

export default function CardsWrapper({ children }) {
  const items = Array.from(children);
  const first = items[0];
  const rest = items.slice(1);

  return (
    <CardsWrapperContainer>
      <DestaqueWrapper>
        {first}
      </DestaqueWrapper>
      <OthersWrapper>
        {rest}
      </OthersWrapper>
    </CardsWrapperContainer>
  );
}

CardsWrapper.propTypes = {
  children: node.isRequired,
};
