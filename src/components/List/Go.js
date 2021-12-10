import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from '../Link'
import Reveal from '../Layout/Reveal'

const Container = styled.div`
  .go{
    display:inline-block;
    opacity:.7;
    color:black;
    padding:1rem 0 1.5rem 0;
    text-transform:uppercase;
    font-weight:bold;
    font-size:65%;
    letter-spacing:.4rem;
    border-bottom:.2rem solid #fff;
    &:hover{
      border-bottom:.2rem solid #000;
      opacity:1;
    }
    .arrow {
      font-size:130%;
    }
  }
`
const Go = (props) => {
  return (
    <Container>
      <Link className='go' href={props.href}>
        {props.back &&
          <span className='arrow'>&lt;&nbsp;</span>
        }
        <Reveal>{props.title}</Reveal>
        {!props.back &&
          <span className='arrow'>&nbsp;&gt;</span>
        }
      </Link>
    </Container>
  )
}

Go.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  back: PropTypes.bool
}

export default Go
