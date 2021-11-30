import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ThemeConsumer, NavActiveConsumer } from '../../state'
import Query from './Query'
import Link from '../Link'
import { getURIPathWithoutLang } from '../../helpers/url'

const Container = styled.header`
  width: 100%;
  position: absolute;
  z-index:10;
  a {
    color:black;
  }
  .menu {
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
      animation: blurnavhome 12s ease 0s infinite;
      -webkit-animation: blurnavhome 12s ease 0s infinite;
      -moz-animation: blurnavhome 12s ease 0s infinite;
      top:40rem;
      font-size:1em;
      margin:0 0 0 -32rem;
      a {
        color:white;
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
      margin:0 0 0 -16.5rem;
      li {
        margin:0 1em;
      }
      &.home {
        top:25rem;
        text-align:center;
        font-size:1em;
        margin:0;
        width:100%;
        line-height:3;
        left:0;
        li {
          display:block;
          a {
            color:white;
          }
        }
      }
    }
  }

  .logo{
    font-size:1em;
    font-weight:800;
    padding:.4em .8em;
    display:inline-block;
    letter-spacing:.3rem;
    filter: blur(2px);
    animation: logoblur 5s ease 0s infinite;
    -webkit-animation: logoblur 5s ease 0s infinite;
    -moz-animation: logoblur 5s ease 0s infinite;

    &.home {
      a {
        color:white;
      }
    }
  }

  @keyframes logoblur {
    0%,
    80% {
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
    }
    40% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
  }

  @keyframes blurnav {
    0%, 10%, 90%, 94%, 100% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    4%, 92%  {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    96% {
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
    }
  }
  @keyframes blurnavhome {
    0%, 10%, 25%, 35%, 90%, 94%, 100% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    4%, 30%, 92%  {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    96% {
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
    }
  }
`


export default () => {

  useEffect(() => {
    console.log(getURIPathWithoutLang())
  }, []) 

  return (
    <Query
      render={({ content }) => (
        <ThemeConsumer>
        {({ theme }) => (
          <NavActiveConsumer>
            {({ navActive }) => (
              <Container>
                <div className={`logo ${(navActive == '') ? 'home' : ''}`}>
                  <Link href="/">{content.content.title}</Link>
                </div>
                <div className={`menu ${(navActive == '') ? 'home' : ''}`}>
                  {content.content.navigation.map((item, index) => (
                    <li><Link activeClassName='active' className={(navActive == item.href) ? 'active' : ''} href={item.href}>{item.title}</Link></li>
                  ))}
                </div>
              </Container>
            )}
          </NavActiveConsumer>
        )}
      </ThemeConsumer>
      )}
    />
  )
}
