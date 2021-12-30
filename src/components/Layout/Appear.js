import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
display:inline-block;
opacity:0;
&.appear {
  transition:opacity 2s ease;
  opacity:1;
}
`

const Appear = (props) => {
  const [ cls, setCls ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCls(true)
    }, props.delay * 20)
  }, [])

  return (
    <Container className={`${(cls) && 'appear'}`}>
      {props.children}
    </Container>
  )
}

Appear.propTypes = {
  method: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default Appear
