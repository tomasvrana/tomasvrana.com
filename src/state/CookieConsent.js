import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { getLocalStorageValue, setLocalStorageValue } from '../helpers/localStorage'
import { allowTracking } from '../helpers/analytics'

const CookieConsentContext = createContext()
const Consumer = CookieConsentContext.Consumer

const Provider = ({ children }) => {
  const [ allowCookies, setAllowCookies ] = useState(getLocalStorageValue('allowCookies') === 'true')

  const updateAllowCookies = allow => {
    if (allow) {
      allowTracking()
      setLocalStorageValue('allowCookies', 'true')
    }

    setAllowCookies(allow)
  }

  return (
    <CookieConsentContext.Provider value={{ allowCookies, setAllowCookies: updateAllowCookies }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any
}

export {
  Provider,
  Consumer
}
