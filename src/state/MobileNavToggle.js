import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const MobileNavToggleContext = createContext()
const Consumer = MobileNavToggleContext.Consumer

const Provider = ({ children }) => {
  const [ toggle, updateToggle ] = useState(false)

  const toggleMobileNav = () => {
    updateToggle(!toggle)
  }

  return (
    <MobileNavToggleContext.Provider value={{ toggle, toggleMobileNav }}>
      {children}
    </MobileNavToggleContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any
}

export {
  Provider,
  Consumer
}
