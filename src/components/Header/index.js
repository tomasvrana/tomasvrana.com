import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ThemeConsumer } from '../../state'
import Query from './Query'
import Link from '../Link'

const Container = styled.header`
  width: 100%;
  position: absolute;
  z-index:10;
  a {
    color:black;
  }
`

const Logo = styled.div`
  font-size:.7em;
  font-weight:800;
  padding:.7em 1.1em;
  display:inline-block

`

const Menu = styled.ul`
  list-style-type:none;
  display:inline-block;
  text-transform:uppercase;
  font-weight:300;
  font-size:.7em;

  li {
    display:inline-block;
    padding:0  1em;
    a {
      padding: 1em 0;
      &.active {
        border-bottom:1px solid black;
      }
    }
  }
`


export default () => (
  <Query
    render={({ content }) => (
      <ThemeConsumer>
      {({ theme }) => (
        <Container>
          <Logo>
            <Link href="/">{content.content.title}</Link>
          </Logo>
          <Menu>
            {content.content.navigation.map((item, index) => (
              <li>
                <Link activeClassName='active' href={item.href}>{item.title}</Link>
              </li>
            ))}
          </Menu>
        </Container>
      )}
    </ThemeConsumer>
    )}
  />
)
