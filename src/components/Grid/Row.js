/* eslint-disable react/no-unused-prop-types */
import React, { Children, Fragment, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from './Column'

const Container = styled.div`
  display: flex;
  margin: ${({ spacing }) => spacing}rem 0;
`

const availableScreenSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
]

const fillRow = (row, maxColumns) => {
  while (row.length < maxColumns) {
    row.push(<Column key={row.length} />)
  }
}

const getOffset = (column, screenSize) => {
  let offset = column.props[`${screenSize}Offset`]
  let fallbackSizes = availableScreenSizes.slice(availableScreenSizes.indexOf(screenSize))
  while (typeof offset !== 'number' && fallbackSizes.length > 0) {
    offset = column.props[`${fallbackSizes.shift()}Offset`]
  }

  return offset
}

const buildRows = (maxColumns, columns, fill, screenSize) => {
  if (maxColumns === null) return [ columns ]
  let rows = []
  let row = []
  for (let i = 0; i < columns.length; i++) {
    const offset = getOffset(columns[i], screenSize)
    if (typeof offset === 'number' && offset > 0) {
      rows.push(row.slice())
      row = new Array(offset).fill(null).map((_, i) => <Column key={i} />)
    }

    const columnClone = cloneElement(columns[i], { key: row.length })
    row.push(columnClone)
    if (row.length >= maxColumns || i === columns.length - 1) {
      rows.push(row.slice())
      row = []
    }
  }

  if (fill) fillRow(rows[rows.length - 1], maxColumns)
  return rows
}

const Row = (props) => {
  const { children, fill, screenSize } = props
  const columns = Children.toArray(children)
  const getMaxColumns = () => {
    let maxColumns = props[screenSize]
    let fallbackSizes = availableScreenSizes.slice(availableScreenSizes.indexOf(screenSize))
    while (typeof maxColumns !== 'number' && fallbackSizes.length > 0) {
      maxColumns = props[fallbackSizes.shift()]
    }

    return maxColumns || columns.length
  }

  const rows = buildRows(getMaxColumns(), columns, fill, screenSize)
  return (
    <Fragment>
      {rows.map((row, index) => (
        <Container
          key={`${props.rowKey}_${index}`}
          spacing={props.spacing}
          style={props.style}
          className={props.className}
        >
          {row}
        </Container>
      ))}
    </Fragment>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  spacing: PropTypes.number,
  fill: PropTypes.bool,
  screenSize: PropTypes.oneOf(availableScreenSizes),
  rowKey: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

Row.defaultProps = {
  spacing: 0
}

export default Row
