import React, { Fragment } from 'react'
import { LanguageConsumer, ThemeConsumer } from '../../state'
import config from '../../config'
import Query from './Query'
import styled from 'styled-components'

const List = styled.ul`
  list-style-type:none;
  text-transform:uppercase;
  width:200px;
  text-align:right;

  li {
    display:inline-block;
    button {
      padding:1em;
      line-height:1;
      background:transparent;
      text-transform:uppercase;
      font-weight:300;
      border:0;
      letter-spacing:.1em;
      font-size:.7em;
      &.active {
        font-weight:600;
      }
    }
  }
`

export default () => (
  <Query
    render={({ select_language: selectLanguage }) => (
      <ThemeConsumer>
        {({ theme }) => (
          <LanguageConsumer>
            {({ lang, setLang }) => (
              <List>
                {Object.keys(config.availableLanguages).map(key => (
                  <li><button className={(lang == key) ? 'active' : ''} href='#' onClick={lang => setLang(key)}>{config.availableLanguages[key].label}</button></li>
                ))}
              </List>
            )}
          </LanguageConsumer>
        )}
      </ThemeConsumer>
    )}
  />
)
