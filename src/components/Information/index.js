import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from './Query'
import Link from '../Link'
import Title from '../Layout/Title'
import gflogo from '../../../resources/images/gf.svg'
import { NavActiveConsumer } from '../../state'
import Reveal from '../Layout/Reveal'
import Appear from '../Layout/Appear'

const Container = styled.div`
@media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
padding:0 1em;
}

`

const Desc = styled.div`


`

const Items = styled.div`


`

const Contact = styled.div`


`
const Logo = styled.div`
padding:1em 0 2em 0;

`


export default () => (
  <Query
    render={({ frontmatter }) => (
      <NavActiveConsumer>
        {({ updateNavActive }) => (
          <Container>
            {updateNavActive(frontmatter.content.href)}
            <Title delay={200} rewrite={frontmatter.content.subtitle}>{frontmatter.content.title}</Title>
            <Desc><Reveal delay={250} method='quicktyping'>{frontmatter.content.desc}</Reveal></Desc>
            <br />
            <br />
            <Desc><Reveal delay={300}>{frontmatter.content.member}</Reveal></Desc>
            <Appear delay={400}><Logo><Link href="//gottfrei.com" target="_blank"><img src={gflogo} alt='' width='150' /></Link></Logo></Appear>
            <Contact><Reveal delay={350} method='rolltyping'>{frontmatter.content.contact}</Reveal></Contact>
          </Container>
        )}
      </NavActiveConsumer>
    )}
  />
)
