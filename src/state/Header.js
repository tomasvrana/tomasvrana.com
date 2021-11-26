import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getURIPathWithoutLang } from '../helpers/url'

const HeaderContext = createContext()
const Consumer = HeaderContext.Consumer

const pageChangeListeners = []
const onPageChange = () => pageChangeListeners.forEach(listener => listener())

const availableKeys = [
  'byron',
  'shelley',
  'goguen',
  'updates'
]

const getHeaderContentKey = (lang) => {
  const uri = getURIPathWithoutLang(lang)
  const section = uri.replace(/^\//, '').split('/').shift()
  return availableKeys.includes(section) ? section : ''
}

const Provider = ({ children, lang }) => {
  const [ key, setKey ] = useState(getHeaderContentKey(lang))

  const onPageChange = () => setKey(getHeaderContentKey(lang))
  useEffect(() => {
    pageChangeListeners.push(onPageChange)

    return () => pageChangeListeners.pop()
  }, [])

  return (
    <HeaderContext.Provider value={{ key }}>
      {children}
    </HeaderContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any,
  lang: PropTypes.string.isRequired
}

export {
  Provider,
  Consumer,
  onPageChange
}
