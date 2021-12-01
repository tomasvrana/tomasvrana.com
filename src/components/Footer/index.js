import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from './Query'
import PropTypes from 'prop-types'
import Menu from '../Header/Menu'

const Container = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
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
  }
  .right {
    text-align:right;
  }
  .menu {
    display:none;
    list-style-type:none;
    text-align:center;
  }

  &.home {
    position:absolute;
    bottom:0;
    left:0;
    max-width: 100%;
    width:100%;
    color:white;
    z-index:88;
    .left,.right{
      opacity:.5;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    .left {
      text-align:center;
      float:none;
    }
    .right {
      text-align:center;
    }
    &.home {
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
    <Fragment>
      <Query
        render={data => (
          <Container className={`${(props.home) ? 'home' : ''}`}>
            {props.home &&
              <Menu />
            }
            <div className='left'>
              2022 &copy; {data.content.left}
            </div>
            <div className='right'>
              {data.content.rights}
            </div>
          </Container>
        )}
      />
    </Fragment>
  )
}

Footer.propTypes = {
  home: PropTypes.bool
}

export default Footer
