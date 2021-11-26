import React, { Fragment } from 'react'
import styled from 'styled-components'
import Link from '../Link'
import PropTypes from 'prop-types'

const Container = styled.div`
text-align:center;
h1 {
  margin:0 0 1rem 0;
}
.desc {
  padding:2em 0 4em 0;
  max-width:760px;
  margin:auto;
}
.media {
  padding:.8rem 0 1rem 0;
  color:#999;
}
small {
  text-transform:uppercase;
}
`

const Item = (props) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <small>
        {props.year}, {props.type}, {props.location}
      </small>
      <div className='media'>
        {props.media}
      </div>
      <div className='desc'>
        {props.description}
      </div>
      <div>
        {props.images.map((item, index) => (
          <img src={item.src} alt={props.image} />
        ))}
      </div>
    </Container>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  media: PropTypes.string,
  year: PropTypes.string,
  images: PropTypes.array
}

export default Item
