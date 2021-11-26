import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'

const Container = styled.span`
  > a {
    background-color: ${({ theme }) => theme.colors.interactive};
    color: ${({ theme }) => theme.colors.buttonColor};
    border: 0.1rem solid ${({ theme }) => theme.colors.interactive};
    border-radius: 0.2rem;
    letter-spacing: 0.1em;
    padding: 0.6rem 1.8rem;
    font-weight: 600;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    display: inline-block;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.buttonColor};
      background-color: ${({ theme }) => theme.colors.interactiveHighlight};
    }

    &.secondary {
      background-color: ${({ theme }) => theme.colors.secondaryButtonBackground};
      color: ${({ theme }) => theme.colors.secondaryButtonColor};
      border-color: ${({ theme }) => theme.colors.secondaryButtonBackground};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.secondaryButtonBackgroundHighlight};
        color: ${({ theme }) => theme.colors.secondaryButtonColor};
      }
    }

    &.outline {
      border-color: ${({ theme }) => theme.colors.text};
      background-color: transparent;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

const Button = (props) => {
  if (!props.href && !props.onClick) throw new Error('Button must either have onClick or href prop')
  return (
    <Container className='text-transform-uppercase'>
      <Link
        target={props.target}
        className={[
          props.secondary ? 'secondary' : '',
          props.outline === 'true' ? 'outline' : ''
        ].join(' ')}
        href={props.href || '#'}
        {...props}
      >
        {props.children}
      </Link>
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]).isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  secondary: PropTypes.bool,
  outline: PropTypes.string,
  target: PropTypes.string
}

Button.defaultProps = {
  secondary: false,
  outline: 'false'
}

export default Button
