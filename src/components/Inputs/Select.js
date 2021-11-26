import React, { useState, useEffect, createRef } from 'react'
import TinyColor from '@ctrl/tinycolor'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Link from '../Link'
import { click } from '../../helpers/analytics'
import { addEventListener, removeEventListener } from '../../helpers/dom'
import { INTERNAL_LINK } from '../../constants/analytics'
import Arrow from '../Arrow'

const Container = styled.div`
  position: relative;
  border: 0.1rem solid ${({ theme }) => theme.colors.text};
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;

  > select {
    display: none;
  }

  > div > a {
    display: flex;
  }

  &.open {
    background-color: ${({ theme }) => theme.colors.primaryHighlight};
  }
`

const CurrentValue = styled.p`
  flex: 1;
  margin: 0;
  padding: 0.6rem 0.2rem 0.6rem 1.2rem;
  color: ${({ theme }) => theme.colors.text};

  &.no-arrow {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

const DropdownToggle = styled.div`
  display: inline;
  padding: 0.6rem 1.2rem;
  border-left: 0.1rem solid ${({ theme }) => new TinyColor(theme.colors.text).setAlpha(0.6).toRgbString()};
`

const OptionContainer = styled.div`
  position: absolute;
  z-index: 2;
  left: -0.1rem;
  top: calc(100% + 0.1rem);
  width: calc(100% + 0.2rem);
  background-color: ${({ theme }) => theme.colors.primaryHighlight};
  border: 0.1rem solid ${({ theme }) => theme.colors.text};
  border-top: none;
  max-height: 15rem;
  overflow-y: scroll;
  transition: max-height 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &.select-open-enter,
  &.select-open-leave {
    max-height: 0;
    background-color: transparent;

    a {
      opacity: 0;
    }
  }

  &.select-open-enter-active {
    max-height: 15rem;
    background-color: ${({ theme }) => theme.colors.primaryHighlight};
  }

  > a {
    transition-delay: 1s;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    margin: 0;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    display: block;
    color: ${({ theme }) => theme.colors.text};
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transition: background-color 0.2s ease-in-out;
      z-index: -1;
    }

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.textInverted};
      outline: none;

      &:after {
        background-color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  > a:nth-of-type(1) {
    transition-delay: 0s;
  }

  > a:nth-of-type(2) {
    transition-delay: 0.2s;
  }

  > a:nth-of-type(3) {
    transition-delay: 0.4s;
  }

  > a:nth-of-type(4) {
    transition-delay: 0.6s;
  }

  > a:nth-of-type(5) {
    transition-delay: 0.8s;
  }
  
  > a:nth-of-type(6) {
    transition-delay: 1s;
  }
`

const Select = ({ options, value, onChange, showArrow = true, name, title }) => {
  const optionsContainerRef = createRef()
  const [ open, setOpen ] = useState(false)
  const selectValue = value => {
    setOpen(false)
    onChange(value)
  }

  const documentClickHandler = e => {
    if (!optionsContainerRef.current) return
    if (!optionsContainerRef.current.contains(e.target)) setOpen(false)
  }

  useEffect(() => {
    if (open) {
      addEventListener('click', documentClickHandler)
    } else {
      removeEventListener('click', documentClickHandler)
    }

    return () => {
      removeEventListener('click', documentClickHandler)
    }
  }, [ open ])

  const onSelect = e => selectValue(e.target.value)
  return (
    <Container className={open ? 'open' : ''} onClick={() => {
      click({ category: INTERNAL_LINK, label: `select_${name}_${open ? 'close' : 'open'}` })
      setOpen(!open)
    }}>
      <select value={value} onChange={onSelect}>
        {options.map(option => (
          <option key={option.key} value={option.value}>{option.title}</option>
        ))}
      </select>
      <div>
        <Link
          href='#'
          onClick={e => {
            e.preventDefault()
            setOpen(!open)
          }}
          tracking={{ label: `select_${name}_${open ? 'close' : 'open'}` }}
          title={title}
        >
          <CurrentValue className={showArrow ? '' : 'no-arrow'}>{(options.filter(option => option.value === value).shift() || {}).label || ''}</CurrentValue>
          {showArrow &&
            <DropdownToggle>
              <span>
                <Arrow fill={open} up={open} />
              </span>
            </DropdownToggle>
          }
        </Link>
        <ReactCSSTransitionGroup
          transitionName='select-open'
          transitionEnterTimeout={400}
          transitionLeaveTimeout={500}
        >
          {open &&
            <OptionContainer ref={optionsContainerRef}>
              {options.map(option => (
                <Link
                  key={option.key}
                  href='#'
                  value={option.value}
                  lang={option.lang}
                  onClick={e => {
                    e.preventDefault()
                    selectValue(option.value)
                  }}
                  tracking={{ label: `select_${name}_${option.value}` }}
                >
                  {option.label}
                </Link>
              ))}
            </OptionContainer>
          }
        </ReactCSSTransitionGroup>
      </div>
    </Container>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string, PropTypes.bool ]).isRequired,
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]).isRequired,
    lang: PropTypes.string
  })).isRequired,
  value: PropTypes.oneOfType([ PropTypes.number, PropTypes.string, PropTypes.bool ]).isRequired,
  onChange: PropTypes.func.isRequired,
  showArrow: PropTypes.bool,
  // Used in tracking
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Select
