import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const PageTitle = styled.h1`
  text-align:center;
  margin:1em 0 2em 0;
  filter: blur(2px);
  animation: blur 4s ease 0s infinite;
  -webkit-animation: blur 8s ease 0s infinite;
  -moz-animation: blur 8s ease 0s infinite;
  @keyframes blur {
    0%,
    80% {
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
    }
    40% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
  }
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
