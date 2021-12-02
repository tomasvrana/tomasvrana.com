import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from '../Link'
import Go from './Go'
import PropTypes from 'prop-types'
import { NavActiveConsumer } from '../../state'
import { GrAttachment } from 'react-icons/gr'

const Ul = styled.ul`
  list-style-type:none;
  text-align:center;
  li {
    margin:0 auto 6em auto;
    h2 {
      margin:0 0 .9rem 0;
      @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
        padding-left:.5em;
        padding-right:.5em;
      }
    }
    small {
      margin:0 0 1rem 0;
      display:block;
    }
    a {
      color:black;
    }
    .desc {
      max-width:600px;
      margin:0 auto 2.5rem auto;
      color:#666;
      @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
        padding-left:1em;
        padding-right:1em;
      }
    }
    .count {
      text-align:right;
      height:0;
      .num{
        display:block;
        font-size:1.2rem;
        margin:0;
        line-height:1;
        font-weight:bold;
        margin:-.5rem 0 -1.5rem 0;
      }
    }
  }

`

const List = (props) => {
  return (
    <NavActiveConsumer>
      {({ updateNavActive }) => (
        <Ul>
          {updateNavActive(props.href)}
          {props.children.map((item, index) => (
            <li key={`listli-${index}`}>
              <h2><Link href={item.href}>{item.title}</Link></h2>
              <div className='desc'>
                {item.description}
              </div>
              <div className='img'>
                <Link href={item.href} className='block'>
                  <img src={item.image} alt={item.title} />
                  {item.count &&
                    <div className='count'><span className='num'><GrAttachment />&nbsp;{item.count}</span></div>
                  }
                </Link>
              </div>
              <Go title={props.more} href={item.href} />
            </li>
          ))}
        </Ul>
      )}
    </NavActiveConsumer>
  )
}

List.propTypes = {
  title: PropTypes.string,
  more: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default List
