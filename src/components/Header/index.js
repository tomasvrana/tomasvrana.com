import React from 'react'
import styled from 'styled-components'
import { NavActiveConsumer, ThemeConsumer, MobileNavToggleConsumer } from '../../state'
import Link from '../Link'
import Menu from './Menu'
import Query from '../Global/Query'
import Reveal from '../Layout/Reveal'
import MediaQuery from 'react-responsive'

const Container = styled.header`
  width: 100%;
  position: fixed;
  z-index:10;
  a {
    color:black;
  }
  .menu {
    list-style-type:none;
    display:block;
    text-transform:uppercase;
    font-weight:300;
    font-size:.7em;
    letter-spacing:.3rem;
    margin:0 ;
    position:absolute;
    
    transition: top .5s cubic-bezier(0.68, -0.6, 0.32, 1.6), font-size .5s cubic-bezier(0.68, -0.6, 0.32, 1.6), margin .5s cubic-bezier(0.68, -0.6, 0.32, 1.6), color .5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    left:0;
    top:10rem;
    animation: blurnav 12s ease 0s infinite;
    -webkit-animation: blurnav 12s ease 0s infinite;
    -moz-animation: blurnav 12s ease 0s infinite;
    line-height:2.8;

    li {
      display:block;
      margin:0;
      a {
        padding: 1rem 1.4rem;
        line-height:2;
        background:url(/images/bg.gif);
        transition: padding .2s ease,background .2s ease;
        &.active {
          @media screen and (min-width: 1200px) {
            padding-right:15rem;
          }
          @media screen and (min-width: 1000px) {
            padding-right:10rem;
          }
          background:#eee;
        }
      }
      &.item-2 {
        margin-top:2rem;
      }
    }
    &.home {
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
          background:transparent;
          color:white;
        }
      }
    }
  }

  .logo {
    padding:.5rem 1.4rem 1.2rem 1.4rem;
    background:url(/images/bggg.gif);
    display:inline-block;
    text-transform:uppercase;
    position:relative;
    mix-blend-mode: color-burn;
    z-index:100;
    a {
      font-size:3em;
      line-height:1;
      font-weight:800;
      letter-spacing:.3rem;
      filter: blur(2px);
      animation: logoblur 8s ease 0s infinite;
      -webkit-animation: logoblur 8s ease 0s infinite;
      -moz-animation: logoblur 8s ease 0s infinite;
      &:hover {
        color:black
      }
    }
    &.home {
      background:transparent;
      a {
        color:white;
        &:hover {
          color:white
        }
      }
    }
    &.mobile-nav-on {
      background:transparent;
      a {
        color:white;
      }
    }
  }

  @keyframes logoflick {
    0%,
    100% {
      color:rgb(0,0,0);
    }
    20% {
      color:rgb(200,50,0);
    }
    30% {
      color:rgb(255,100,0);
    }
    40% {
      color:rgb(0,255,200);
    }
    50% {
      color:rgb(30,220,0);
    }
    60% {
      color:rgb(200,0,230);
    }
    70% {
      color:rgb(0,50,200);
    }
  }
  @keyframes logoblur {
    0%,
    80% {
      -webkit-filter: blur(7px);
      -moz-filter: blur(7px);
      -o-filter: blur(7px);
      -ms-filter: blur(7px);
    }
    40% {
      -webkit-filter: blur(3px);
      -moz-filter: blur(3px);
      -o-filter: blur(3px);
      -ms-filter: blur(3px);
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
  @keyframes blurnav_0 {
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
  @keyframes blurnav_1 {
    0%, 10%, 25%, 35%, 100% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    4%, 30%, 85%  {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    90% {
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
    }
  }
  @keyframes blurnav_2 {
    0%, 10%, 16%, 25%, 55%, 90%, 94%, 100% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    13%, 40%, 92%  {
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

  .mobile-nav-pop{
    background:#333;
    position:fixed;
    top:-100vh;
    left:0;
    width:100%;
    height:100%;
    z-index:30;
    text-align:center;
    transition:top .25s ease;
    &.on {
      top:0;
    }
    &.home {
      top:0;
      background:transparent;
    }
    ul.menu {
      @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
        display:block;
      }
     
      display:block;
      top:24vh;
      text-align:center;
      font-size:1em;
      margin:0;
      width:100%;
      line-height:2;
      left:0;      
      width:100%;
      li {
        padding:.5rem 0;
        margin:0 1em;
        display:block;
        &.item-2 {
          display:none;
        }
        a {
          color:white;
          padding:1em;
          &.active {
            background:transparent;
          }
        }
      }
    }
  }
  .mobile-nav-toggle {
    position:fixed;
    z-index:99;
    top:0;
    right:0;
    width:7rem;
    height:7rem;
    background:#fff;
    z-index:35;
    padding:0 2rem;
    text-align:center;
    border:0;
    line-height:.4;
    animation:hamburgerin 2s ease;
    .bar {
      vertical-align:top;
      display:inline-block;
      margin:-.1rem 0 .5rem;
      width:100%;
      height:.4rem;
      background:#000;
      margin:0;
      transition:all .4s ease;
    }
    .bar-1 {
      animation:hamburgerbar1 2s ease;
    }
    .bar-2 {
      animation:hamburgerbar2 2s ease;
    }
    &.on {
      background:transparent;
      .bar {
        background:#fff;
        margin:0;
        position:relative;
        &.bar-0 {
          transform: rotate(45deg);
          margin:0 -.5rem 0 0;
        }
        &.bar-1 {
          transform: rotate(-45deg);
          margin:-.7rem -.5rem .5rem 0;
          animation:hamburgerbars 2s ease;
        }
        &.bar-2 {
          width:0;
        }
      }
    }
    &.home {
      background:transparent;
      right:-10rem;
      .bar {
        background:transparent;
      }
    }
  }
  @keyframes hamburgerin {
    0% {
      right:-80px;
    }
    60% {
      right:-80px;
    }
    80% {
      right:0px;
    }
  }
  @keyframes hamburgerbar1 {
    0% {
      margin-top:-8px;
    }
    80% {
      margin-top:-8px;
    }
    100% {
      margin-top:0px;
    }
  }
  @keyframes hamburgerbar2 {
    0% {
      margin-top:-14px;
    }
    80% {
      margin-top:-14px;
    }
    100% {
      margin-top:0px;
    }
  }

`


export default () => {
  return (
    <Query
      render={({ frontmatter }) => (
        <ThemeConsumer>
          {({ theme }) => (
            <MobileNavToggleConsumer>
              {({ toggle, toggleMobileNav }) => (
                <NavActiveConsumer>
                  {({ navActive }) => (
                    <Container>
                      <div className={`logo ${(navActive == '') ? 'home' : ''} ${(toggle) ? 'mobile-nav-on' : ''}`}>
                        <Link href="/" onClick={() => toggle && toggleMobileNav()}>
                          <Reveal hover={frontmatter.header.subtitle}>{frontmatter.header.title}</Reveal>
                        </Link>
                      </div>
                      <MediaQuery query={`(min-width: ${theme.dimensions.mobileBreakpoint}px)`}>
                        <Menu />
                      </MediaQuery>
                      <MediaQuery query={`(max-width: ${theme.dimensions.mobileBreakpoint - 1}px)`}>
                        <button className={`mobile-nav-toggle ${(toggle) ? 'on' : 'off'} ${(navActive == '') ? 'home' : ''}`} onClick={() => toggleMobileNav()}><span className='bar bar-0'></span><span className='bar bar-1'></span><span className='bar bar-2'></span></button>
                        <div className={`mobile-nav-pop ${(toggle) ? 'on' : 'off'} ${(navActive == '') ? 'home' : ''}`}>
                          <Menu />
                        </div>
                      </MediaQuery>
                    </Container>
                  )}
                </NavActiveConsumer>
              )}
            </MobileNavToggleConsumer>
          )}
        </ThemeConsumer>
      )}
    />
  )
}
