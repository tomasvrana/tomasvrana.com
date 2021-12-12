import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from '../Link'
import Go from './Go'
import PropTypes from 'prop-types'
import { NavActiveConsumer } from '../../state'
import { GrAttachment } from 'react-icons/gr'
import GlobalQuery from '../Global/Query'
import Reveal from '../Layout/Reveal'

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
    .img {
      img {
        animation: blurimg 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        -webkit-animation: blurimg 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        -moz-animation: blurimg 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
        @keyframes blurimg {
          0%{
            -webkit-filter: blur(50px);
            -moz-filter: blur(50px);
            -o-filter: blur(50px);
            -ms-filter: blur(50px);
          }
          0%,10%,20%,30%,40%,60%,80% {
            opacity:0;
          }
          5% {
            opacity:.1;
          }
          15% {
            opacity:.3;
          }
          25% {
            opacity:.5;
          }
          35% {
            opacity:.6;
          }
          50% {
            opacity:.5;
          }
          70% {
            opacity:.6;
          }

          100% {
            opacity:1;
            -webkit-filter: blur(0px);
            -moz-filter: blur(0px);
            -o-filter: blur(0px);
            -ms-filter: blur(0px);
          }
        }
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
    <GlobalQuery
      render={({ frontmatter }) => (
        <NavActiveConsumer>
          {({ updateNavActive }) => (
            <Ul>
              {updateNavActive(props.href)}
              {props.children && props.children.map((item, index) => (
                <li key={`listli-${index}`}>
                  <h2><Link href={item.href}><Reveal>{item.title}</Reveal></Link></h2>
                  <div className='desc'>
                    {item.description}
                  </div>
                  <div className='img'>
                    <Link href={item.href} className='block'>
                      <img src={item.image} alt={item.title} />
                      {item.count &&
                        <Fragment>
                          {(item.count == 1) &&
                            <div className='count'><span className='num' title={`${item.count} ${frontmatter.others.image}`}><GrAttachment />&nbsp;{item.count}</span></div>
                          }
                          {(item.count > 1 && item.count < 5) &&
                            <div className='count'><span className='num' title={`${item.count} ${frontmatter.others.images}`}><GrAttachment />&nbsp;{item.count}</span></div>
                          }
                          {(item.count >= 5) &&
                            <div className='count'><span className='num' title={`${item.count} ${frontmatter.others.imagess}`}><GrAttachment />&nbsp;{item.count}</span></div>
                          }
                        </Fragment>
                      }
                    </Link>
                  </div>
                  <Go title={frontmatter.others.more} href={item.href} />
                </li>
              ))}
            </Ul>
          )}
        </NavActiveConsumer>
      )}
    />
  )
}

List.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default List
