import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Bienvenidos a mi<br /> Portafolio Personal
    </SectionTitle>
    <SectionText>
    Hola, soy Randy.<br /> Programador FullStack orientado al Frontend. <br />
    Me considero una persona comprometida con mi trabajo, que todo quede bien hecho, pero tambien me gusta disfrutar de mi tiempo libre. 
      
    </SectionText>
    <Button onClick = { () => window.location = 'https://www.linkedin.com/in/randy-leon-charinga/' }>Conoce Más</Button>
  </LeftSection>
 </Section>
);

export default Hero;