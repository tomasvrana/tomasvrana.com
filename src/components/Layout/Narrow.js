import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Head from '../Head'
import PageLoader from '../PageLoader'
import { PageLoaderConsumer } from '../../state'
import { getURIPath } from '../../helpers/url'
import Footer from '../Footer'

const Main = styled.main`
  position: relative;
  z-index: 1;
  margin: 0 1.5rem;
  width: 100%;
  padding:8rem 0 ;
  opacity: 1;
  transition: 0.5s opacity ease-in-out;
  max-width: 650px;

  &.page-content-enter {
    opacity: 0;
  }

  &.page-content-enter-active,
  &.page-content-leave {
    opacity: 1;
  }

  &.page-content-leave-active {
    opacity: 0;
  }
`

const PageLoaderContainer = styled.div`
  opacity: 1;
  transition: 0.5s opacity ease-in-out;

  &.page-content-enter {
    opacity: 0;
  }

  &.page-content-enter-active,
  &.page-content-leave {
    opacity: 1;
  }

  &.page-content-leave-active {
    opacity: 0;
  }
`

const LoadingMask = ({ children, pageLoading }) => {
  const [ showContent, setShowContent ] = useState(null)
  const [ showLoader, setShowLoader ] = useState(null)

  useEffect(() => {
    let timeout
    if (pageLoading) {
      setShowContent(false)
      setShowLoader(true)
    } else {
      setShowLoader(false)
      timeout = setTimeout(() => {
        setShowContent(true)
      }, 500)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [ pageLoading ])

  return (
    <ReactCSSTransitionGroup
      transitionName='page-content'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {((showLoader === null && pageLoading) || showLoader) &&
        <PageLoaderContainer key={`page_loader_${getURIPath()}`}>
          <PageLoader />
        </PageLoaderContainer>
      }
      {((showContent === null && !pageLoading) || showContent) &&
        <Main key={`page_content_${getURIPath()}`}>
          {children}
        </Main>
      }
    </ReactCSSTransitionGroup>
  )
}

LoadingMask.propTypes = {
  children: PropTypes.node,
  pageLoading: PropTypes.bool
}

const Layout = ({ children, headData = null }) => (
  <PageLoaderConsumer>
    {({ loading }) => (
      <Fragment>
        <Head {...headData} />
        <LoadingMask pageLoading={loading}>
          {children}
        </LoadingMask>
        <Footer />
      </Fragment>
    )}
  </PageLoaderConsumer>
)

Layout.propTypes = {
  children: LoadingMask.propTypes.children,
  headData: PropTypes.object
}

export default Layout
