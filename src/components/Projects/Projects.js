import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
 <Section nopadding id = 'projects'>
  <SectionDivider />
  <SectionTitle main>Proyectos</SectionTitle>
  <GridContainer>
    { projects.map( ( { id, image, title, description, tags, source, visit } ) => (
     <BlogCard key = { id }>
      <Img src = { image } />
      <TitleContent>
        <HeaderThree title>{ title }</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo>{ description }</CardInfo>
      <br />
      <div>
        <TitleContent>Herramientas</TitleContent>
        <TagList>
          { tags.map( (tag, i)=> (
            <Tag jey = { i }>{ tag }</Tag>
          ) ) }
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href = { visit }>Codigo</ExternalLinks>
        <ExternalLinks href = { visit }>Página</ExternalLinks>
      </UtilityList>
     </BlogCard>
    ) ) }
  </GridContainer>
 </Section>
);

export default Projects;