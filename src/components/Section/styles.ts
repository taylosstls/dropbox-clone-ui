import styled from 'styled-components';

export const Container = styled.div`
  --paddint-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.blue {
    --bg-color: var(--color-primary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-secondary);
  }

  &.vanilla {
    --bg-color: var(--color-secondary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-primary);
  }

  &.white {
    --bg-color: var(--color-tertiary);
    --text-color: var(--color-quaternary);
    --logo-color: var(--color-blue);
  }

  &.black {
    --bg-color: var(--color-quaternary);
    --text-color: var(--color-tertiary);
    --logo-color: var(--color-blue);
  }

  &:first-child {
    --paddint-top: 130px;
    --heading-font-size: 48px;
    --heading-line-height: 56px;

    @media (min-width: 881px) {
      --content-width: 50%;
      --heading-font-size: 72px;
      --heading-line-height: 80px;
    }
  }

  background: var(--bg-color);
  position: relative;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--paddint-top) 32px var(--padding-bottom);

  @media (min-width: 881px) {
    padding: var(--paddint-top) 64px var(--padding-bottom);
  }

  > h3 {
    font-size: 24px;
    line-height: 32px;
    color: var(--logo-color);
    max-width: var(--content-width);
    letter-spacing: 0;
    margin-bottom: 25px;
  }

  > h2 {
    font-size: var(--heading-font-size);
    line-height: var(--heading-line-height);
    color: var(--logo-color);
    max-width: var(--content-width);
    letter-spacing: -1px;
    margin-bottom: 50px;
  }
  > p {
    margin-top: 24px;
    font-size: 16px;
    line-height: 24px;
    color: var(--text-color);
    max-width: var(--content-width);
    margin-bottom: 50px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > .imageDiv {
    max-width: 720px;
    margin-top: -180px;

    img {
      max-width: 100%;
    }
  }

  > .textDiv {
    max-width: 400px;
    margin: 0 auto;
    padding-left: calc(1440px * (1 / 24));
    padding-right: calc(1440px * (1 / 24));

    > h2 {
      font-size: var(--heading-font-size);
      line-height: var(--heading-line-height);
      color: var(--logo-color);
      max-width: var(--content-width);
      letter-spacing: -1px;
    }
    > p {
      margin-top: 24px;
      font-size: 16px;
      line-height: 24px;
      color: var(--text-color);
      max-width: var(--content-width);
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    > .imageDiv {
      max-width: 100%;
    }

    > .textDiv {
      margin-top: 48px;
      max-width: 480px;
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto, auto, auto, auto);
`;

export const Header = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  height: 90px;
  margin: 0 auto;

  padding-left: 32px;
  padding-right: 32px;

  @media (min-width: 881px) {
    padding-left: 64px;
    padding-right: 64px;
  }

  > button {
    color: var(--text-color);
    font-size: 16px;
    height: 50px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 5px;
    border: 0 none;
    background: none;
    cursor: pointer;

    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LogoContainer = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;

  svg:first-child {
    margin-right: 8px;
  }
`;
