import React, { Children, cloneElement, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Row from './Row'
import Column from './Column'
import { ThemeConsumer } from '../../state'
import { addEventListener, removeEventListener, getInnerWidth } from '../../helpers/dom'

const Container = styled.div`
  padding: ${({ spacing }) => spacing}rem 0;
`

const ResponsiveGrid = ({ theme, children, fillRows, spacing, style, className }) => {
  const getScreenSize = () => {
    const { screenSizes } = theme.dimensions
    const width = getInnerWidth()
    if (width < screenSizes.small) return 'xs'
    if (width >= screenSizes.small && width < screenSizes.medium) return 'sm'
    if (width >= screenSizes.medium && width < screenSizes.large) return 'md'
    if (width >= screenSizes.large && width < screenSizes.extraLarge) return 'lg'
    if (width >= screenSizes.extraLarge) return 'xl'
  }

  const [ screenSize, setScreenSize ] = useState(getScreenSize())
  const onResize = () => setScreenSize(getScreenSize())

  useEffect(() => {
    addEventListener('resize', onResize)
    return () => removeEventListener('resize', onResize)
  }, [])

  return (
    <Container spacing={spacing} style={style} className={className}>
      {Children.toArray(children).map((child, index) => cloneElement(child, { fill: fillRows, screenSize, rowKey: `${index}` }))}
    </Container>
  )
}

ResponsiveGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  fillRows: PropTypes.bool,
  theme: PropTypes.shape({
    dimensions: PropTypes.shape({
      screenSizes: PropTypes.shape({
        small: PropTypes.number.isRequired,
        medium: PropTypes.number.isRequired,
        large: PropTypes.number.isRequired,
        extraLarge: PropTypes.number.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  spacing: PropTypes.number.isRequired,
  style: PropTypes.object,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

const Grid = ({ children, fillRows, spacing, style, className }) => (
  <ThemeConsumer>
    {({ theme }) => (
      <ResponsiveGrid
        theme={theme}
        fillRows={fillRows}
        spacing={spacing}
        style={style}
        className={className}
      >
        {children}
      </ResponsiveGrid>
    )}
  </ThemeConsumer>
)

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  fillRows: PropTypes.bool,
  spacing: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

Grid.defaultProps = {
  fillRows: false,
  spacing: 0
}

export default Grid
export {
  Row,
  Column
}
