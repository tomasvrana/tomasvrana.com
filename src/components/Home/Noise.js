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

@keyframes barsmove {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}  

  .grad {
    position:absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(-3deg, rgba(0,0,0,0) 20%, rgba(0,0,20,.3) 50%, rgba(0,0,0,0) 80%); 
    animation: gradient 10s ease infinite;
    background-size: 200% 200%;
  }

  .bars {
    position:absolute;
    opacity:.05;
    width: 100%;
    height: 100%;
    background: linear-gradient(91deg, 
      #fff 0%, #fff 6%, #ff0 7%, #ff0 14%, #0ff 15%, #0ff 21%, #0f0 22%, #0f0 28%, #f0f 29%, #f0f 35%, #f00 36%, #f00 42%, #00f 43%, #00f 49%, 
      #fff 50%, #fff 56%, #ff0 57%, #ff0 63%, #0ff 64%, #0ff 70%, #0f0 71%, #0f0 77%, #f0f 78%, #f0f 84%, #f00 85%, #f00 93%, #00f 94%, #00f 100%); 
    animation: barsmove 5s linear infinite;
    background-size: 215% 215%;
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
      buffer32[i++] = ((250 * Math.random())|180) << 24;

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
          <div className='bars'></div>
          <div className='grad'></div>
          <canvas id='canvas' />
        </Container>
      )}
    </NavActiveConsumer>
  )
}
