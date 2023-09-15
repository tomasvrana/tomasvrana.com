import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Reveal from './Reveal'

const PageTitle = styled.h1`
  text-align:left;
  margin:1em 0 2em 0;
  filter: blur(2px);
  text-transform:uppercase;
  &.large {
    text-transform:none;
    font-size:270%;
  }
  animation: blur 16s ease 0s infinite;
  -webkit-animation: blur 16s ease 0s infinite;
  -moz-animation: blur 16s ease 0s infinite;
  @keyframes blur {
    0%,
    39%, 41%, 43%, 45%, 100% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    40%, 42%, 44%, 46%{
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
    }
  }
`

const Title = (props) => {
  return (
    <PageTitle className={`${(props.large) ? 'large' : ''}`}>
      <Reveal
        method={props.method}
        rewrite={props.rewrite} 
        rewriteRandom={props.rewriteRandom} 
        rewriteDelay={props.rewriteDelay} 
        delay={props.delay}
      >
        {props.children}
      </Reveal>
    </PageTitle>
  )
}

Title.propTypes = {
  method: PropTypes.string,
  rewrite: PropTypes.string,
  rewriteRandom: PropTypes.string,
  rewriteDelay: PropTypes.string,
  delay: PropTypes.number,
  large: PropTypes.bool,
  children: PropTypes.node
}

export default Title
