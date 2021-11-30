import React, { Fragment } from 'react'
import styled from 'styled-components'
import Go from '../List/Go'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { NavActiveConsumer } from '../../state'

const Container = styled.div`
text-align:center;
h1 {
  margin:0 0 1rem 0;
  filter: blur(1px);
  animation: blur1 8s ease 0s infinite;
  -webkit-animation: blur1 8s ease 0s infinite;
  -moz-animation: blur1 8s ease 0s infinite;
  @keyframes blur1 {
    0%,
    80% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    40% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
  }
}
.desc {
  padding:2em 0 4em 0;
  max-width:760px;
  margin:auto;
  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    padding-left:1em;
    padding-right:1em;
  }
}
.media {
  padding:.8rem 0 1rem 0;
  color:#999;
  animation: blur2 5s ease 0s infinite;
  -webkit-animation: blur2 5s ease 0s infinite;
  -moz-animation: blur2 5s ease 0s infinite;
  @keyframes blur2 {
    0%,
    40% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    60% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
  }
}
small {
  text-transform:uppercase;
  filter: blur(1px);
  animation: blur3 4s ease 0s infinite;
  -webkit-animation: blur3 4s ease 0s infinite;
  -moz-animation: blur3 4s ease 0s infinite;
  @keyframes blur3 {
    0%,
    90% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    40% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
  }
}

.images {
  img {
    padding:0  0 10rem;
  }
}
`

const Item = (props) => {
  return (
    <NavActiveConsumer>
      {({ navActive, updateNavActive }) => (
        <Container>
          {updateNavActive(props.content.parent)}
          <h1>{props.content.title}</h1>
          <small>
            {props.content.year}, {props.content.type}, {props.content.location}
          </small>
          <div className='media'>
            {props.content.media} ({props.content.width}&times;{props.content.height})
          </div>
          <div className='desc'>
            <ReactMarkdown>{props.content.description}</ReactMarkdown>
          </div>
          <div className='images'>
            {props.content.images.map((item, index) => (
              <img src={item.src} alt={props.content.image} />
            ))}
          </div>
          <Go title={props.content.back} href={props.content.parent} back />
        </Container>
      )}
    </NavActiveConsumer>
  )
}

Item.propTypes = {
  content: PropTypes.object
}

export default Item
