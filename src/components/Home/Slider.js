import React, { Fragment } from 'react'
import Query from './Query'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Container = styled.div`
  position:fixed;
  z-index: 1;
  width:100%;
  height:100%;
  overflow:hidden;

  h1{
    position:fixed;
    font-size:1000%;
    letter-spacing:.05em;
    
    z-index:33;
    text-align:center;
    width:100%;
    top:40vh;
    font-weight:800;
  }

  img {
    pointer-events:none;
  }
`

const tooglesGroupId = 'Toggles';
const valuesGroupId = 'Values';
const mainGroupId = 'Main';

const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    autoFocus:true,
    thumbWidth: false,
    selectedItem: 0,
    interval: 4000,
    transitionTime: 1000,
    swipeScrollTolerance: 5
})


export default () => (
  <Query
    render={({ frontmatter }) => (
      <Container>
        <h1>{frontmatter.content.title}</h1>
        <Carousel {...getConfigurableProps()}>
          {frontmatter.content.projects.map((item, index) => (
            <div>
              <img src={item.image}  unSelectable="on" onSelectStart="return false;" onMouseDown="return false;" />
              <p className="legend">{item.title}</p>
            </div>
          ))}
        </Carousel>
      </Container>
    )}
  />
)
