import React from 'react'
import { NavActiveConsumer, MobileNavToggleConsumer } from '../../state'
import Link from '../Link'
import Query from '../Global/Query'
import Reveal from '../Layout/Reveal'


export default () => {
  return (
    <Query
      render={({ frontmatter }) => (
        <MobileNavToggleConsumer>
          {({ toggle, toggleMobileNav }) => (
            <NavActiveConsumer>
              {({ navActive }) => (
                <ul className={`menu ${(navActive == '') ? 'home' : ''} ${(toggle) ? 'nav-toggled' : ''}`}>
                  {frontmatter.header.navigation.map((item, index) => (
                    <li className={`item-${index}`} key={`menuli-${index}`}><Link activeClassName='active' className={(navActive == item.href) ? 'active' : ''} href={item.href} onClick={() => {(toggle) ? toggleMobileNav() : null}}><Reveal>{item.title}</Reveal></Link></li>
                  ))}
                </ul>
              )}
            </NavActiveConsumer>
          )}
        </MobileNavToggleConsumer>
      )}
    />
  )
}

