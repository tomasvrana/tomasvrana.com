import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Ul = styled.ul`

`

const List = (props) => {
  return (
    <Fragment>
      <h2>{props.title}</h2>
      <Ul>
        {props.children.map((item, index) => (
          <li key={`infoli-${index}`}>
            <strong>{item.title}</strong>
            <div className='desc'>
              {item.desc}
            </div>
          </li>
        ))}
      </Ul>
    </Fragment>
  )
}

List.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
}

export default List
