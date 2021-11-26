import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from './Query'
import List from './List'
import Title from '../List/Title'
import gflogo from '../../../resources/images/gf.svg'

const Container = styled.div`


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
      <Container>
        <Title title={frontmatter.content.title} />
        <Desc>{frontmatter.content.desc}</Desc>
        <Logo><img src={gflogo} alt='' width='200' /></Logo>
        <List title={frontmatter.content.experience.title}>
          {frontmatter.content.experience.items}
        </List>
        <List title={frontmatter.content.exhibitions.title}>
          {frontmatter.content.exhibitions.items}
        </List>
        <Contact>{frontmatter.content.contact}</Contact>
      </Container>
    )}
  />
)
