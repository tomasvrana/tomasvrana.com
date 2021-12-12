import React, { Fragment } from 'react'
import { LanguageConsumer, NavActiveConsumer, ThemeConsumer, MobileNavToggleConsumer } from '../../state'
import config from '../../config'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

const List = styled.ul`
  list-style-type:none;
  text-transform:uppercase;
  width:100%;

  li {
    display:inline-block;
    button {
      padding:1em 0;
      margin:0 .5rem;
      line-height:1;
      background:transparent;
      text-transform:uppercase;
      font-weight:300;
      border:0;
      letter-spacing:.3rem;
      font-size:.6em;
      &.active {
        border-bottom:1px solid #999;
      }
    }
  }

  &.home button, &.nav-toggled button{
    text-align:center;
    color:white;
    &.active {
      border-bottom:1px solid white;
    }
  }
`

export default () => (
  <ThemeConsumer>
    {({ theme }) => (
      <MobileNavToggleConsumer>
        {({ toggle }) => (
          <NavActiveConsumer>
            {({ navActive }) => (
              <LanguageConsumer>
                {({ lang, setLang }) => (
                  <List className={`lang-picker ${(navActive == '') ? 'home' : ''} ${(toggle) ? 'nav-toggled' : ''}`}>
                    {Object.keys(config.availableLanguages).map(key => (
                      <li>
                        <button className={(lang == key) ? 'active' : ''} href='#' onClick={lang => setLang(key)}>
                            {key}
                        </button>
                      </li>
                    ))}
                  </List>
                )}
              </LanguageConsumer>
            )}
          </NavActiveConsumer>
        )}
      </MobileNavToggleConsumer>
    )}
  </ThemeConsumer>
)
