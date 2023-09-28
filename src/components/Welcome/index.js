import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from './Query'
import Link from '../Link'
import Title from '../Layout/Title'
import gflogo from '../../../resources/images/gf.svg'
import { NavActiveConsumer } from '../../state'
import Reveal from '../Layout/Reveal'
import Appear from '../Layout/Appear'
import Noise from '../Home/Noise'
import { GrGithub, GrDocumentPdf } from 'react-icons/gr'

const Container = styled.div`
padding:10rem 1em 0 1em;
color:white;
position:relative;
z-index:100;
`

const Wrap = styled.div`


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
const Websites = styled.div`
font-size:85%;
ul {
  list-style-type:none;
  padding:0;
}
li {
  list-style-type:none
} 
@media (max-width: 768px) {
  display:none
}

`
const Portfolio = styled.div`
font-size:85%;

`


export default () => (
  <Query
    render={({ frontmatter }) => (
      <NavActiveConsumer>
        {({ updateNavActive }) => (
          <Wrap>
            <Noise />
            <Container>
              {updateNavActive(frontmatter.content.href)}
              <Title delay={200} rewrite={frontmatter.content.subtitle}>{frontmatter.content.title}</Title>
              <Desc><Reveal delay={250} method='quicktyping'>{frontmatter.content.desc}</Reveal></Desc>

            </Container>
          </Wrap>
        )}
      </NavActiveConsumer>
    )}
  />
)
