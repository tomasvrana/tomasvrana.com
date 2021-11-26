import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PageTitle = styled.h1`
  text-align:center;
  margin:0 0 2em 0;
`

const Title = (props) => {
  return (
    <PageTitle>
      {props.title}
    </PageTitle>
  )
}

Title.propTypes = {
  title: PropTypes.string
}

export default Title
