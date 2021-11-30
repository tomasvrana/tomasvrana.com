import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const NavActiveContext = createContext()
const Consumer = NavActiveContext.Consumer

const Provider = ({ children }) => {
  const [ navActive, updateNavActive ] = useState('')

  return (
    <NavActiveContext.Provider value={{ navActive, updateNavActive }}>
      {children}
    </NavActiveContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any
}

export {
  Provider,
  Consumer
}
