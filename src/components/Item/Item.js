import React, { Fragment } from 'react'
import styled from 'styled-components'
import Go from '../List/Go'
import PropTypes from 'prop-types'
import { NavActiveConsumer } from '../../state'
import GlobalQuery from '../Global/Query'
import Title from '../Layout/Title'
import Reveal from '../Layout/Reveal'
import Typing from '../Layout/Typing'

const Container = styled.div`
text-align:center;
h1 {
  margin:0 0 1rem 0;
  filter: blur(1px);
  animation: blur1 8s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  -webkit-animation: blur1 8s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  -moz-animation: blur1 8s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  @keyframes blur1 {
    0% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    10%,100% {
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
  animation: blur2 5s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  -webkit-animation: blur2 5s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  -moz-animation: blur2 5s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  @keyframes blur2 {
    0%,
    40%, 50% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    45% {
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
    10% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
    15%, 100% {
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
    animation: blurimg 1s ease;
    -webkit-animation: blurimg 1s ease;
    -moz-animation: blurimg 1s ease;
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
    @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
      padding:0  0 3rem;
    }
  }
}

.cooperation {
  font-weight:400;
  font-size:85%;
  margin:1rem 0 0 0;
  animation: blur4 10s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  -webkit-animation: blur4 10s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  -moz-animation: blur4 10s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0s infinite;
  @keyframes blur4 {
    0%,
    50%, 65% {
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
  div {
    font-size:75%;
    text-transform:uppercase;
  }
}
`

const Item = (props) => {
  const subline = props.content.year + ', ' + props.content.type + ', ' + props.content.location
  return (
    <GlobalQuery
      render={({ frontmatter }) => (
        <NavActiveConsumer>
          {({ navActive, updateNavActive }) => (
            <Container>
              {updateNavActive(props.content.parent)}
              <Title large hover={(props.content.subtitle) && props.content.subtitle}>{props.content.title}</Title>
              <small><Typing>{subline}</Typing></small>
              {props.content.cooperation &&
                <div className='cooperation'>
                  <div><Reveal>{frontmatter.others.cooperation}</Reveal></div>
                  <Reveal>{props.content.cooperation}</Reveal></div>
              }
              <div className='media'>
                <Reveal>{props.content.media}</Reveal>
                {props.content.width &&
                  <span> ({props.content.width}&times;{props.content.height})</span>
                }
              </div>
              <div className='desc'>
                <Reveal introVal={50}>{props.content.description}</Reveal>
              </div>
              <div className='images'>
                {props.content.images.map((item, index) => (
                  <img key={`img-${index}`} src={item.src} alt={props.content.image} />
                ))}
              </div>
              <Go title={frontmatter.others.back} href={props.content.parent} back />
            </Container>
          )}
        </NavActiveConsumer>  
      )}
    />
  )
}

Item.propTypes = {
  content: PropTypes.object
}

export default Item
