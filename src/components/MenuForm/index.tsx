import React from 'react';
import { ReactSVG } from 'react-svg';

import DropboxLogoBlue from '../../assets/glyph_blue.svg';
import DropboxLogoTextBlack from '../../assets/wordmark_black.svg';

import { Container, Navigation, LogoContainer, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle(): void {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <LogoContainer>
          <ReactSVG src={DropboxLogoBlue} />
          <ReactSVG src={DropboxLogoTextBlack} />
        </LogoContainer>

        <button type="button" className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privade e aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
