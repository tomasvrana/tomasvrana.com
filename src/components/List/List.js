import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from '../Link'
import PropTypes from 'prop-types'

const Ul = styled.ul`
  list-style-type:none;
  text-align:center;
  li {
    margin:0 auto 8em auto;
    max-width:760px;
    h2 {
      margin:0 0 .2em 0;
    }
    small {
      margin:0 0 2em 0;
      display:block;
    }
    a {
      color:black;
    }
    .desc {
      max-width:600px;
      margin:0 auto 2em auto;
      color:#666;
    }
  }

`

const List = (props) => {
  return (
    <Ul>
      {props.children.map((item, index) => (
        <li>
          <h2><Link href={item.href}>{item.title}</Link></h2>
          <small>
            {item.year}
          </small>
          <div className='desc'>
            {item.description}
          </div>
          <div>
            <Link href={item.href}><img src={item.image} alt={item.title} /></Link>
          </div>
        </li>
      ))}
    </Ul>
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
