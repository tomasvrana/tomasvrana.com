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
              <br />
              <Websites>
              <h4><Reveal delay={350} method='quicktyping'>Some websites I did:</Reveal></h4>
              {frontmatter.content.websites && frontmatter.content.websites.map((item, index) => (
                <li>
                  {item.url  &&
                  <Link href={item.url} target="_blank"><Reveal delay={400} method='quicktyping'>{item.title}</Reveal></Link>
                  }
                </li>
              ))}
              </Websites>
              <Portfolio>
                <h4>
                  <Reveal delay={450} method='quicktyping'>Some graphic works I did</Reveal> 
                  <Link href="https://tomasvrana.com/pdf/Tomas-Vrana-Graphic-Portfolio.pdf" target="_blank"><Reveal delay={470} method='quicktyping'>&nbsp;here</Reveal></Link>
                </h4>
              </Portfolio>
            </Container>
          </Wrap>
        )}
      </NavActiveConsumer>
    )}
  />
)
