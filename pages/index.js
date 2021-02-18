import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Capa from '../src/components/Capa';
import Card from '../src/components/Card';
import CardDestaque from '../src/components/CardDestaque';
import CardText from '../src/components/CardText';
import CardTitle from '../src/components/CardTitle';
import CardImage from '../src/components/CardImage';
import Footer from '../src/components/Footer';
import FooterIcon from '../src/components/FooterIcon';
import Logo from '../src/components/Logo';
import NavBar from '../src/components/NavBar';
import SectionTitle from '../src/components/SectionTitle';
import WrapperProjetos from '../src/components/WrapperProjetos';
import CardsWrapper from '../src/components/CardsWrapper';

export default function Home() {
  return (
    <>
      <Capa title="Bruno Noriller" subtitle="Portfolio" />
      <Cabecalho>
        <Logo />
        <NavBar items={['About', 'Contact']} />
      </Cabecalho>
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
        <FooterIcon variant="Github" />
        <FooterIcon variant="Linkedin" />
      </Footer>
    </>
  );
}
