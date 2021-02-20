import React from 'react';
import Link from 'next/link';

import Capa from '../src/components/Capa';
import Card from '../src/components/Card';
import CardDestaque from '../src/components/CardDestaque';
import CardText from '../src/components/CardText';
import CardTitle from '../src/components/CardTitle';
import CardImage from '../src/components/CardImage';
import Footer from '../src/components/Footer';
import FooterIcon from '../src/components/FooterIcon';
import SectionTitle from '../src/components/SectionTitle';
import WrapperProjetos from '../src/components/WrapperProjetos';
import CardsWrapper from '../src/components/CardsWrapper';
import Header from '../src/components/Header';

export default function Home() {
  return (
    <>
      <Capa title="Bruno Noriller" subtitle="Portfolio" />
      <Header />
      <WrapperProjetos>
        <SectionTitle>
          SectionTitle
        </SectionTitle>
        <CardsWrapper>
          <CardDestaque>
            <CardImage src="https://picsum.photos/500" />
            <CardTitle>
              CardTitle
            </CardTitle>
            <CardText>
              {/* eslint-disable-next-line max-len */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
          </CardDestaque>
          <Card>
            <CardImage src="https://picsum.photos/500" />
            <CardTitle>
              CardTitle
            </CardTitle>
          </Card>
          <Card>
            <CardImage src="https://picsum.photos/500" />
            <CardTitle>
              CardTitle
            </CardTitle>
          </Card>
          <Card>
            <CardImage src="https://picsum.photos/500" />
            <CardTitle>
              CardTitle
            </CardTitle>
          </Card>
        </CardsWrapper>
      </WrapperProjetos>
      <Footer>
        <a href="https://github.com/noriller" target="_blank" rel="noreferrer">
          <FooterIcon variant="Github" />
        </a>
        <a href="https://www.linkedin.com/in/noriller/" target="_blank" rel="noreferrer">
          <FooterIcon variant="Linkedin" />
        </a>
      </Footer>
    </>
  );
}

