import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Ripple = keyframes`
  0% {
    width: 0;
    padding-bottom: 0;
    opacity: 1;
  }

  100% {
    width: 100%;
    padding-bottom: 100%;
    opacity: 0;
  }
`

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size}rem;
  height: ${({ size }) => size}rem;

  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${({ size }) => size}rem;
    border: 4px solid ${({ theme }) => theme.colors.interactive};
    opacity: 1;
    border-radius: 50%;
    animation: ${Ripple} 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    box-sizing: content-box;

    &:nth-of-type(2) {
      animation-delay: -0.33s;
    }

    &:last-of-type {
      animation-delay: -0.66s;
    }
  }
`

const Loader = ({ size }) => (
  <Container size={size}>
    <div />
    <div />
    <div />
  </Container>
)

Loader.propTypes = {
  size: PropTypes.number
}

Loader.defaultProps = {
  size: 10
}

export default Loader
