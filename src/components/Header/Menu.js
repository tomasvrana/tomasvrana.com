import React from 'react'
import styled from 'styled-components'
import { ThemeConsumer, NavActiveConsumer } from '../../state'
import Query from './Query'
import Link from '../Link'

const Menu = styled.ul`
    list-style-type:none;
    display:inline-block;
    text-transform:uppercase;
    font-weight:300;
    font-size:.7em;
    letter-spacing:.3rem;
    margin:0 0 0 -24rem;
    position:absolute;
    transition: top .5s cubic-bezier(0.25,0.1,0.25,1), font-size .5s cubic-bezier(0.25,0.1,0.25,1), margin .5s cubic-bezier(0.25,0.1,0.25,1), color .5s cubic-bezier(0.25,0.1,0.25,1);
    left:50%;
    top:7rem;
    animation: blurnav 12s ease 0s infinite;
    -webkit-animation: blurnav 12s ease 0s infinite;
    -moz-animation: blurnav 12s ease 0s infinite;

    li {
      display:inline-block;
      margin:0  3em;
      a {
        padding: 1em 0;
        &.active {
          border-bottom:1px solid #999;
        }
      }
    }
    &.home {
      top:40rem;
      font-size:1em;
      margin:0 0 0 -32rem;
      li {
        &.item-0 {
          animation: blurnav_0 14s ease 0s infinite;
          -webkit-animation: blurnav_0 14s ease 0s infinite;
          -moz-animation: blurnav_0 14s ease 0s infinite;
        }
        &.item-1 {
          animation: blurnav_1 12s ease 0s infinite;
          -webkit-animation: blurnav_1 12s ease 0s infinite;
          -moz-animation: blurnav_1 12s ease 0s infinite;
        }
        &.item-2 {
          animation: blurnav_2 9s ease 0s infinite;
          -webkit-animation: blurnav_2 9s ease 0s infinite;
          -moz-animation: blurnav_2 9s ease 0s infinite;
        }
        a {
          color:white;
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
      margin:0 0 0 -16.5rem;
      li {
        margin:0 1em;
      }
      &.home {
        top:20rem;
        text-align:center;
        font-size:1em;
        margin:0;
        width:100%;
        line-height:3;
        left:0;
        li {
          display:block;
          &.item-2 {
            display:none;
          }
          a {
            color:white;
          }
        }
      }
    }
  

`


export default () => {
  return (
    <Query
      render={({ content }) => (
        <ThemeConsumer>
          {({ theme }) => (
            <NavActiveConsumer>
              {({ navActive }) => (
                <Menu className={`menu ${(navActive == '') ? 'home' : ''}`}>
                  {content.content.navigation.map((item, index) => (
                    <li className={`item-${index}`} key={`menuli-${index}`}><Link activeClassName='active' className={(navActive == item.href) ? 'active' : ''} href={item.href}>{item.title}</Link></li>
                  ))}
                </Menu>
              )}
            </NavActiveConsumer>
          )}
        </ThemeConsumer>
      )}
    />
  )
}

