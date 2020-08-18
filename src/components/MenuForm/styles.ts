import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 32px;
  min-height: 64px;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }

  > button {
    background: none;
    border: 0 none;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    outline: 0;
  }
`;

export const LogoContainer = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-bottom: 0;

  @media (min-width: 1024px) {
    display: none;
  }

  svg:first-child {
    margin-right: 8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 24px;
    font-weight: 500;
  }

  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > input {
    background: var(--color-tertiary);
    border: 1px solid var(--color-border);
    padding: 14px 18px;
    font-size: 14px;

    margin-top: 18px;
  }

  > button {
    margin-top: 18px;
    padding: 16px 24px;
    font-size: 16px;
    background-color: var(--color-blue);
    color: var(--color-tertiary);
    border: 0 none;
    cursor: pointer;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.7;
    }
  }

  > .terms {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 8px;
  }
`;
