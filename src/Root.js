import React, { Fragment, useEffect } from 'react'
import './bootstrap'
import PropTypes from 'prop-types'
import parseURL from 'url-parse'
import { getHref, setHref } from './helpers/url'
import { autoCapture } from './helpers/analytics'
import { REDIRECT } from './constants/analytics'

function adminRedirect () {
  const { protocol, slashes, host, hash } = parseURL(getHref())
  const token = (hash.replace(/^#\/?/, '').split('&').map(p => p.split('=')).filter(p => p[0] === 'invite_token').shift() || [])[1]
  if (token) {
    autoCapture({ category: REDIRECT, action: 'redirect_to_admin' })
    setHref(`${protocol}${slashes && '//'}${host}/admin/#/invite_token=${token}`)
  }
}

const AdminRedirector = () => {
  useEffect(() => {
    adminRedirect()
  }, [])

  return null
}

const Root = ({ element }) => (
  <Fragment>
    <AdminRedirector />
    {element}
  </Fragment>
)

Root.propTypes = {
  element: PropTypes.node.isRequired
}

export default Root
