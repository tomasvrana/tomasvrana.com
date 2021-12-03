import React from 'react'
import { NavActiveConsumer } from '../../state'
import Link from '../Link'
import Query from '../Global/Query'


export default () => {
  return (
    <Query
      render={({ frontmatter }) => (
        <NavActiveConsumer>
          {({ navActive }) => (
            <ul className={`menu ${(navActive == '') ? 'home' : ''}`}>
              {frontmatter.header.navigation.map((item, index) => (
                <li className={`item-${index}`} key={`menuli-${index}`}><Link activeClassName='active' className={(navActive == item.href) ? 'active' : ''} href={item.href}>{item.title}</Link></li>
              ))}
            </ul>
          )}
        </NavActiveConsumer>
      )}
    />
  )
}

