import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href = '/'>
        <a style = {{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20;' }}>
          <DiCssdeck size = '3rem' /> <Span>Portafolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href = '#projects'>
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#tech'>
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>
      <li>
        <Link href = '#about'>
          <NavLink>Acerca De</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href = 'https://github.com/charinwolf'>
        <AiFillGithub size = '3rem' />
      </SocialIcons>
      <SocialIcons href = 'https://linkedin.com/in/randy-leon-charinga/'>
        <AiFillLinkedin size = '3rem' />
      </SocialIcons>

    </Div3>
  </Container>


);

export default Header;
