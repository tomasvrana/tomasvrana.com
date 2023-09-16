import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavActiveConsumer } from '../../state'


const Container = styled.div`
position:fixed;
top:0;
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
    background: linear-gradient(-3deg, rgba(0,0,0,0) 20%, rgba(0,0,20,.5) 50%, rgba(0,0,0,0) 80%); 
    animation: gradient 10s ease infinite;
    background-size: 200% 200%;
  }

  .bars {
    position:absolute;
    opacity:.7;
    width: 100%;
    height: 100%;
    background: linear-gradient(91deg, 
      #0f0 0%, #0f0 6%, #f0f 7%, #f0f 14%, #0ff 15%, #0ff 21%, #0f0 22%, #0f0 28%, #f0f 29%, #f0f 35%, #f00 36%, #f00 42%, #00f 43%, #00f 49%, 
      #0f0 50%, #0f0 56%, #f0f 57%, #f0f 63%, #0ff 64%, #0ff 70%, #0f0 71%, #0f0 77%, #f0f 78%, #f0f 84%, #f00 85%, #f00 93%, #00f 94%, #00f 100%); 
    animation: barsmove 50s linear infinite;
    background-size: 215% 215%;
  }
  .bars.fast {
    animation: barsmove 25s linear infinite;
  }
  .bars.in {
    opacity:.7;
  }
  .barsback {
    position:absolute;
    opacity:.5;
    width: 100%;
    height: 100%;
    background: linear-gradient(-90deg, 
      #00f 7%, #00f 14%, #0ff 15%, #0ff 21%, #0f0 22%, #0f0 28%, #f0f 29%, #f0f 35%, #f00 36%, #f00 42%, #ff0 43%, #ff0 49%, 
      #00f 57%, #00f 63%, #0ff 64%, #0ff 70%, #0f0 71%, #0f0 77%, #f0f 78%, #f0f 84%, #f00 85%, #f00 93%, #ff0 94%, #ff0 100%); 
    animation: barsmove 40s linear infinite;
    background-size: 215% 215%;
  }
  .barsback.fast {
    animation: barsmove 20s linear infinite;
  }
  .barsback.in {
    opacity:1;
  }


  #canvas {
    width: 100%;
    height: 100%;
  }

  #info {
    position:absolute;
    font-size:3rem;
    top:10rem;
    left:10rem;
    color:red
  }
  #info2 {
    position:absolute;
    font-size:3rem;
    top:14rem;
    left:10rem;
    color:red
  }
`


export default () => {
  const [ bool1, setBool1 ] = useState(true)
  const [ bool2, setBool2 ] = useState(true)
  const [ bool1A, setBool1A ] = useState(true)
  const [ bool2A, setBool2A ] = useState(true)
  let toggle = true
  let canvas
  let ctx
  let number
  let aid
  let t1 = 0, t1r = 300, t1b = true
  let t2 = 0, t2r = 500, t2b = true
  let a1 = 0, a1r = 100, a1b = true
  let a2 = 0, a2r = 400, a2b = true


  function noise(ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const w = ctx.canvas.width,
          h = ctx.canvas.height,
          iData = ctx.createImageData(w, h),
          buffer32 = new Uint32Array(iData.data.buffer),
          len = buffer32.length
      let i = 0

    ctx.putImageData(iData, 0, 0);
  }

  const loop = () => {
    t1++;
    t2++;
    a1++;
    a2++;
    if(t1 > t1r){
      t1r = Math.floor(Math.random() * 1000)
      t1b = !t1b
      setBool1(t1b)
      t1 = 0
    }
    if(t2 > t2r){
      t2r = Math.floor(Math.random() * 1000)
      t2b = !t2b
      setBool2(t2b)
      t2 = 0
    }
    if(a1 > a1r){
      a1r = Math.floor(Math.random() * 1000)
      a1b = !a1b
      setBool1A(a1b)
      a1 = 0
    }
    if(a2 > a2r){
      a2r = Math.floor(Math.random() * 1000)
      a2b = !a2b
      setBool2A(a2b)
      a2 = 0
    }
    //document.getElementById('info').innerHTML = t1r + " - " + t1 + " - " + t1b
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
          <div className={`bars ${(bool1) ? 'fast' : ''} ${(bool1A) ? 'in' : ''}`}></div>
          <div className={`barsback ${(bool2) ? 'fast' : ''} ${(bool2A) ? 'in' : ''}`}></div>
          <div className='grad'></div>
          <canvas id='canvas' />
        </Container>
      )}
    </NavActiveConsumer>
  )
}
