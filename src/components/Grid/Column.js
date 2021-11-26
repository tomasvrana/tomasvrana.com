/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  flex: ${({ size }) => size};
  margin: 0 ${({ spacing }) => spacing}rem;
`

const getJustifyContentValue = verticalAlign => {
  switch (verticalAlign) {
    case 'top':
      return 'flex-start'
    case 'bottom':
      return 'flex-end'
    default:
      return verticalAlign
  }
}

const VerticalAlignContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ verticalAlign }) => getJustifyContentValue(verticalAlign)};
  height: 100%;
`

const Column = ({ children, size, spacing, style, className, verticalAlign }) => (
  <Container size={size} spacing={spacing} style={style} className={className}>
    {verticalAlign &&
      <VerticalAlignContainer verticalAlign={verticalAlign}>
        {children}
      </VerticalAlignContainer>
    }
    {!verticalAlign && children}
  </Container>
)

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  size: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  spacing: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  verticalAlign: PropTypes.oneOf([
    'top',
    'center',
    'bottom'
  ])
}

Column.defaultProps = {
  size: 1,
  spacing: 0
}

export default Column
