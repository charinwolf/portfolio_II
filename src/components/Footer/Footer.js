import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contactame</LinkTitle>
          <LinkItem>+5491134852313</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>rcharinwolf@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovando un proyecto a la vez...</Slogan>
        </CompanyContainer>

        <SocialContainer>
        <SocialIcons href = 'https://github.com/charinwolf'>
          <AiFillGithub size = '3rem' />
        </SocialIcons>
        <SocialIcons href = 'https://linkedin.com/in/randy-leon-charinga/'>
          <AiFillLinkedin size = '3rem' />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
