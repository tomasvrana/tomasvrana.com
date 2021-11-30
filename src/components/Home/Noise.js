import React, { useEffect } from 'react'
import styled from 'styled-components'
import { NavActiveConsumer } from '../../state'


const Container = styled.div`

  @keyframes gradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }  

  .wrap {
    overflow: hidden;
    position:absolute;
    width: 100%;
    font-size:10em;
    color:white;
    height: 100%;
    background: linear-gradient(-3deg, rgba(0,0,0,0) 20%, rgba(0,0,20,.3) 50%, rgba(0,0,0,0) 80%); 
    animation: gradient 10s ease infinite;
    background-size: 200% 200%;
  }
  #canvas {
    width: 100%;
    height: 100%;
  }
`


export default () => {
  let toggle = true
  let canvas
  let ctx
  let number
  let aid
  let t = 0

  function noise(ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const w = ctx.canvas.width,
          h = ctx.canvas.height,
          iData = ctx.createImageData(w, h),
          buffer32 = new Uint32Array(iData.data.buffer),
          len = buffer32.length
      let i = 0

    for(; i < len;)
      buffer32[i++] = ((200 * Math.random())|150) << 24;

    ctx.putImageData(iData, 0, 0);
  }

  const loop = () => {
    t++;
    toggle = !toggle;
    if (toggle) {
        aid = requestAnimationFrame(loop);
        return;
    }
    noise(ctx);
    aid = requestAnimationFrame(loop);
  }

  useEffect(() => {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    loop()
    return () => {
      cancelAnimationFrame(aid)
    }
  }, [])

  return (
    <NavActiveConsumer>
      {({ updateNavActive }) => (
        <Container>
          {updateNavActive('')}
          <div id='canvas-wrap' className='wrap'></div>
          <canvas id='canvas' />
        </Container>
      )}
    </NavActiveConsumer>
  )
}
