import React from 'react'
import styled from 'styled-components'
import { ThemeConsumer, NavActiveConsumer } from '../../state'
import Query from './Query'
import Link from '../Link'


export default () => {
  return (
    <Query
      render={({ content }) => (
        <ThemeConsumer>
          {({ theme }) => (
            <NavActiveConsumer>
              {({ navActive }) => (
                <ul className={`menu ${(navActive == '') ? 'home' : ''}`}>
                  {content.content.navigation.map((item, index) => (
                    <li className={`item-${index}`} key={`menuli-${index}`}><Link activeClassName='active' className={(navActive == item.href) ? 'active' : ''} href={item.href}>{item.title}</Link></li>
                  ))}
                </ul>
              )}
            </NavActiveConsumer>
          )}
        </ThemeConsumer>
      )}
    />
  )
}

