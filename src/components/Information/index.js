import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from './Query'
import List from './List'
import Link from '../Link'
import Title from '../List/Title'
import gflogo from '../../../resources/images/gf.svg'
import ReactMarkdown from 'react-markdown'
import { ThemeConsumer, NavActiveConsumer } from '../../state'

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
            <Title title={frontmatter.content.title} />
            <Desc><ReactMarkdown>{frontmatter.content.desc}</ReactMarkdown></Desc>
            <Logo><Link href="//gottfrei.com" target="_blank"><img src={gflogo} alt='' width='150' /></Link></Logo>
            <Desc><ReactMarkdown>{frontmatter.content.member}</ReactMarkdown></Desc>
            <Contact>{frontmatter.content.contact}</Contact>
          </Container>
        )}
      </NavActiveConsumer>
    )}
  />
)
