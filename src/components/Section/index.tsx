import React from 'react';
import { ReactSVG } from 'react-svg';

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  LogoContainer,
} from './styles';

import DropboxLogoBlue from '../../assets/glyph_blue.svg';
import DropboxLogoVanilla from '../../assets/glyph_french_vanilla.svg';

import DropboxLogoTextBlack from '../../assets/wordmark_black.svg';
import DropboxLogoTextWhite from '../../assets/wordmark_white.svg';

interface Props {
  variant: 'blue' | 'vanilla' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random());

  function handleToggle(): void {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <LogoContainer>
            {variant === 'blue' ? (
              <ReactSVG src={DropboxLogoVanilla} />
            ) : (
              <ReactSVG src={DropboxLogoBlue} />
            )}

            {variant === 'black' || variant === 'blue' ? (
              <ReactSVG src={DropboxLogoTextWhite} />
            ) : (
              <ReactSVG src={DropboxLogoTextBlack} />
            )}
          </LogoContainer>
          <button onClick={handleToggle} type="button">
            {buttonVariant === 0 ? 'Acessar' : 'Interagir'}
          </button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
