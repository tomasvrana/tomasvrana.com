import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, ThemeConsumer, LanguageProvider, LanguageConsumer, PageLoaderProvider, CookieConsentProvider, HeaderProvider, MobileNavToggleProvider, NavActiveProvider } from './state'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PickerContainer from './components/PickerContainer'
import Header from './components/Header'
import GlobalStyles from './GlobalStyles'

const App = ({ element }) => (
  <CookieConsentProvider>
    <ThemeProvider>
      <ThemeConsumer>
        {({ theme }) => (
          <StyledThemeProvider theme={theme}>
            <Fragment>
              <GlobalStyles />
              <LanguageProvider>
                <NavActiveProvider>
                  <MobileNavToggleProvider>
                    <PageLoaderProvider>
                      <Fragment>
                        <PickerContainer />
                        <LanguageConsumer>
                          {({ lang }) => (
                            <HeaderProvider lang={lang}>
                              <Header />
                            </HeaderProvider>
                          )}
                        </LanguageConsumer>
                        {element}
                      </Fragment>
                    </PageLoaderProvider>
                  </MobileNavToggleProvider>
                </NavActiveProvider>
              </LanguageProvider>
            </Fragment>
          </StyledThemeProvider>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  </CookieConsentProvider>
)

App.propTypes = {
  element: PropTypes.node.isRequired
}

export default App
