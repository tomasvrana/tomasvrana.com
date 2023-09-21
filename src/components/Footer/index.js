import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MobileNavToggleConsumer } from '../../state'
import Menu from '../Header/Menu'
import Query from '../Global/Query'
import Link from '../Link'
import Reveal from '../Layout/Reveal'
import LanguagePicker from '../PickerContainer/LanguagePicker'
import { GrGithub } from 'react-icons/gr'

const Container = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  max-width:100vw;
  padding: 0 2rem;
  margin: 0 auto;
  display: block;
  letter-spacing: 0.08em;
  margin-top: 15rem;
  margin-bottom: 3rem;
  text-transform:uppercase;
  font-size:60%;
  letter-spacing:.2rem;

  img {
    margin: 0;
  }

  .left {
    text-align:left;
    float:left;
    line-height:1;
    .github{
      font-size:150%;
      line-height:.1;
      vertical-align:middle;
    }
  }
  .right {
    text-align:right;
  }
  .menu {
    display:none;
    list-style-type:none;
    text-align:center;
  }

  &.home, &.nav-toggled {
    position:fixed;
    bottom:0;
    left:0;
    max-width: 100%;
    width:100%;
    color:white;
    z-index:15;
    .left,.right{
      opacity:.5;
    }
  }

  .lang-picker{
    margin-bottom:4rem;
    font-size:180%;
    display:none;
    animation:langin 6s ease;
  }
  @keyframes langin {
    0%,60% {
      opacity:0
    }
    100% {
      opacity:1
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    .left {
      text-align:left;
      float:none;
      
    }
    .right {
      text-align:left;
      display:block;
    }
 
    &.home, &.nav-toggled {
      .menu {
        display:block;
        margin:-1rem 0 3rem 0;
        li {
          display:none;
          &.item-2 {
            display:block;
            font-size:160%;
            a {
              color:white
            }
          }
        }
      }
    }
  }
`

const Footer = (props) => {
  return (
    <MobileNavToggleConsumer>
      {({ toggle }) => (
        <Fragment>
          <Query
            render={({ frontmatter }) => (
              <Container className={`${(props.home) ? 'home' : ''} ${(toggle) ? 'nav-toggled' : ''}`}>
                <div className='left'>
                  <Reveal delay={350}>{frontmatter.footer.left}</Reveal> <Link href='https://github.com/tomasvrana/tomasvrana.com' className='github' target='_blank'><GrGithub /></Link> &nbsp; 
                  <Reveal delay={400}>E-mail: tom@vrana.org</Reveal>
                </div>
                <div className='right'>
                  <Reveal delay={330}>{frontmatter.footer.rights}</Reveal>
                </div>
              </Container>
            )}
          />
        </Fragment>
      )}
    </MobileNavToggleConsumer>
  )
}

Footer.propTypes = {
  home: PropTypes.bool
}

export default Footer
