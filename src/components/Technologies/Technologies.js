import React from 'react';
import { DiBootstrap, DiCss3, DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id = 'tech'>
  <SectionDivider />
  <br />
  <SectionTitle>Tecnologías</SectionTitle>
  <SectionText>
    He trabajado con una serie de herramientas un tanto diversas que abarcan tanto Front-End como Back-End
  </SectionText>
  <List>
    <ListItem>
      <DiReact size = '3rem' />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experiencia con <br />
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size = '3rem' />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experiencia con <br />
          Node.js y Bases de Datos
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiBootstrap size = '3rem' />
      <ListContainer>
        <ListTitle>Diseño</ListTitle>
        <ListParagraph>
          Experiencia con <br />
          HTML, CSS y Bootstrap
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>


);

export default Technologies;
