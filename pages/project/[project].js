import React from 'react';
import {
  CardDestaque, CardImage, CardsWrapper, CardText, CardTitle, Header, WrapperProjetos,
} from '../../src/components';

export default function Project() {
  return (
    <div>
      <Header />
      <WrapperProjetos>
        <CardsWrapper>
          <CardDestaque>
            <CardImage src="/mathQuizz.png" />
            <CardTitle>
              Math Quizz
            </CardTitle>
            <CardText>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
          </CardDestaque>
          <div />
        </CardsWrapper>
      </WrapperProjetos>
    </div>
  );
}
