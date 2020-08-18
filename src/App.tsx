import React from 'react';

import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

import data from './data';

import heroImage from './assets/home-hero-vflMv-jgR.jpg';

const App: React.FC = () => {
  return (
    <>
      <Section
        variant="blue"
        dropname={data[0].dropname}
        title={data[0].title}
        description={data[0].description}
      />

      <Section
        variant="vanilla"
        title={data[1].title}
        description={data[1].description}
        image={heroImage}
      />

      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />

      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />

      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>
    </>
  );
};

export default App;
