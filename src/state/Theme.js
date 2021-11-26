import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import themes from '../config/themes'
import { getLocalStorageValue, setLocalStorageValue } from '../helpers/localStorage'

const ThemeContext = createContext()
const Consumer = ThemeContext.Consumer

function getInitialTheme () {
  const localStorageTheme = getLocalStorageValue('theme')
  return (localStorageTheme && themes[localStorageTheme])
    ? localStorageTheme
    : Object.keys(themes)[0]
}

const Provider = ({ children }) => {
  const [ theme, updateTheme ] = useState(getInitialTheme())

  const setTheme = theme => {
    if (!Object.keys(themes).includes(theme)) throw new Error(`Theme ${theme} does not exist`)
    setLocalStorageValue('theme', theme)
    updateTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ themeString: theme, theme: themes[theme], setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any
}

export {
  Provider,
  Consumer
}
