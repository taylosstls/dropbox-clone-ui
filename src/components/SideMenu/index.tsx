import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const scrollThreshold = 300;

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function onScroll(): void {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];

  const menuOpen = classes.join(' ').trim();

  function toggleActiveMenu(): void {
    setIsActive((prev) => !prev);
  }

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={menuOpen}>{children}</Container>;
};

export default SideMenu;
