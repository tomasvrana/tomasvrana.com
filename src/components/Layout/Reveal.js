import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LanguageConsumer } from '../../state'

const Container = styled.span`
display:inline-block;
.blur-1 {
  filter: blur(1px);
}
.blur-2 {
  filter: blur(2px);
}
.blur-3 {
  filter: blur(3px);
}
.blur {
  animation: blink 5s ease 0s infinite;
  -webkit-animation: blink 5s ease 0s infinite;
  -moz-animation: blink 5s ease 0s infinite;
  @keyframes blink {
    0%,20%,40%,60%,80% {
      opacity:0.65
    }
    10%,30%,50%,70%,100% {
      opacity:1
    }
  }
  position: relative;
  &:after {
    content: attr(data-text);
    position: absolute;
    transition:none;
    width: 100%;
    height: 100%;
    opacity:.1;
    top: 0px;
    left: 0;

    animation: inblink .5s ease 0s;
    -webkit-animation: inblink .5s ease 0s;
    -moz-animation: inblink .5s ease 0s;
    @keyframes inblink {
      0%,20%,40%,60%,80% {
        opacity:0
      }
      10%,30%,50%,70%,100% {
        opacity:1
      }
    }
  }
  &.blurOffset-0:after {
    top: 1px;
  }
  &.blurOffset-1:after {
    top: -1px;
  }
  &.blurOffset-2:after {
    top: -5px;
  }
  &.blurOffset-3:after {
    top: -2px;
  }
  &.blurOffset-4:after {
    top: -3px;
  }
  &.blurOffset-5:after {
    top: -4px;
  }
}

span span {
  transition:opacity 8s ease, width 2s ease;
}
.glitch{
  animation: glitchblur 3s ease 0s;
  -webkit-animation: glitchblur 3s ease 0s;
  -moz-animation: glitchblur 3s ease 0s;
  @keyframes glitchblur {
    0%,
    80% {
      -webkit-filter: blur(0px);
      -moz-filter: blur(0px);
      -o-filter: blur(0px);
      -ms-filter: blur(0px);
    }
    40% {
      -webkit-filter: blur(1px);
      -moz-filter: blur(1px);
      -o-filter: blur(1px);
      -ms-filter: blur(1px);
    }
  }
}
`

const Box = (props) => {
  const [ blur, setBlur ] = useState({})
  const [ out, setOut ] = useState([])
  const [ glitchIndex, setGlitchIndex ] = useState([])
  const [ glitchBool, setGlitchBool ] = useState([])
  let letters = `abcdefghijklmnopqrstuvwxyz-@,.' ()ěščřžýáíéúů:0123456789`
  if(props.lang == 'en'){
    letters = `abcdefghijklmnopqrstuvwxyz-@,.' ():0123456789`
  }
  let l = 0
  let ll = []
  let block = false
  if(props.children != null && props.children != undefined){
    block = props.children.split(/\r?\n/)
  }
  let rewriteblock = false
  if(props.rewrite != null && props.rewrite != undefined){
    rewriteblock = props.rewrite.split(/\|/)
  }
  let revealing = false
  let starts = []
  let pause = Math.floor(Math.random() * 1000) + 200
  let glitch = []
  let bluring = {
    index: [],
    bool: [],
    time: [],
    offset: [],
    counter: []
  }
  let intro = []
  let rolling = []
  let rollingT = []
  let glitchpos = []
  let aid = 0

  let rewTimer = 0
  let rewNext = 0
  let rewPeriod = 0
  let erased = false
  let rewIndex = []
  let exrewriten = 0
  let rewriten = 0
  let rewriting = false
  let typePos = []
  let typing = false

  let arr = letters.split('')
  let myarr = []

  function nextSetup () {
    revealing = true
    rewTimer = 0
    rewNext = Math.floor(Math.random() * 200) + 400
  }

  function rollAll () {
    nextSetup()
    for(let b = 0; b < block.length; b++){
      myarr[b] = block[b].split('')
      pause = Math.floor(Math.random() * 1000) + 500
      glitch[b] = false
      ll[b] = []
      starts[b] = []
      intro[b] = []
      rolling[b] = []
      rollingT[b] = []
      glitchpos[b] = Math.floor(Math.random() * myarr[b].length)
      blurVars(b, myarr)
      for(let i = 0; i < myarr[b].length; i++){
        ll[b][i] = Math.floor(Math.random() * arr.length)
        starts[b][i] = 5
        if(props.delay){
          starts[b][i] = props.delay
        }
        intro[b][i] = true
        rolling[b][i] = true
        rollingT[b][i] = Math.floor(Math.random() * 30) + ((myarr[b].length < 100) ? Math.abs(100 - myarr[b].length) : 0)
      }
    }
    setGlitchIndex(glitchpos)
    setGlitchBool(glitch)
    setBlur(bluring)
    rollAllLoop()
  }

  function rollAllQuick () {
    nextSetup()
    rewriting = false
    l = 0
    for(let b = 0; b < block.length; b++){
      myarr[b] = block[b].split('')
      pause = Math.floor(Math.random() * 1000) + 500
      glitch[b] = false
      ll[b] = []
      starts[b] = []
      intro[b] = []
      rolling[b] = []
      rollingT[b] = []
      glitchpos[b] = Math.floor(Math.random() * myarr[b].length)
      blurVars(b, myarr)
      for(let i = 0; i < myarr[b].length; i++){
        ll[b][i] = Math.floor(Math.random() * arr.length)
        starts[b][i] = 0
        intro[b][i] = false
        rolling[b][i] = false
        rollingT[b][i] = 0
      }
    }
    setGlitchIndex(glitchpos)
    setGlitchBool(glitch)
    setBlur(bluring)
    rollAllLoop()
  }

  function blurVars (b, myarr) {
    bluring.counter[b] = 0 
    bluring.bool[b] = false
    bluring.index[b]= Math.floor(Math.random() * myarr[b].length)
    bluring.time[b] = Math.floor(Math.random() * (((myarr[b].length < 100) ? (101 - myarr[b].length) : 1) * 10))
    setBlur(bluring)
  }

  function blurLoop (b) {
    bluring.counter[b]++    
    bluring.offset[b] = Math.floor(Math.random() * 5)

    if(bluring.counter[b] == bluring.time[b]){
      if(bluring.bool[b]){
        bluring.time[b] = Math.floor(Math.random() * 20) + 3
        bluring.counter[b] = 0
        bluring.bool[b] = false
      }else{
        bluring.index[b]= Math.floor(Math.random() * block[b].length)
        bluring.time[b] = Math.floor(Math.random() * (((myarr[b].length < 100) ? (101 - myarr[b].length) : 1) * (Math.floor(Math.random() * 20) + 4)))
        bluring.counter[b] = 0
        bluring.bool[b] = true
      }
    }
  }


  function doOutput (ar) {
    let res = []
    for(let b = 0; b < ar.length; b++){
      if(ar[b] != undefined && ar[b].length > 0){
        res[b] = ar[b].split(' ')
        for(let c = 0; c < res[b].length; c++){
          res[b][c] = res[b][c].split('')
        }
      }
    }
    setOut(res)
  }
  
  function eraseText () {
    revealing = false
    erased = false
    l = 0
    let rewr = (rewriten == 0) ? 1 : rewriten
    if(block.length > 1){
      if(block[rewr - 1] == undefined){
        console.log(block)
      }
      for(let p = 0; p < 1; p++){
        myarr[p] = block[rewr - 1].split('')
        rewIndex[p] = block[rewr - 1].length
      }
    }else{
      for(let p = 0; p < block.length; p++){
        myarr[p] = block[p].split('')
        rewIndex[p] = block[p].length
      }
    }

    cancelAnimationFrame(aid)
    eraseLoop()
  }

  function eraseLoop () {
    let typed = []
    for(let p = 0; p < block.length; p++){
      let line = ''
      for(let w = 0; w < rewIndex[p]; w++){
        if(myarr[p][w] == ' '){
          line += '='
        }else{
          line += myarr[p][w]
        }
      }
      rewIndex[p]--
      typed[p] = line
    }
    doOutput(typed)
    let go = 0
    for(let p = 0; p < block.length; p++){
      if(rewIndex[p] > 0){
        go++
      }
    }
    if(go > 0){
      aid = requestAnimationFrame(eraseLoop);
    }else{
      if(!erased){
        erased = true
        if(rewriten < (block.length + 1)){
          rewriteText ()
        }
      }
    }
  }

  let rewpar = 1
  let rowDone = []



  function typeText () {
    myarr = []
    typePos = []
    starts = 0
    l = 0
    revealing = false
    typing = true
    if(!block){
      block = props.children.split(/\r?\n/)
    }
    for(let p = 0; p < block.length; p++){
      myarr[p] = block[p].split('')
      typePos[p] = 1
      blurVars(p, myarr)
      rowDone[p] = false
      ll[p] = 0
    }
    if(props.delay){
      setTimeout(() => {
        typeLoop()
      }, props.delay * 20)
    }else{
      typeLoop()
    }
  }

  function rewriteText () {
    typePos = []
    rewPeriod = Math.floor(Math.random() * 50) + 70
    myarr = []
    l = 0
    revealing = false
    typing = true
    exrewriten = rewriten
    rewriting = true

    block = props.rewrite.split(/\|/)
    if(block[rewriten] != undefined){
      for(let p = 0; p < block.length; p++){
        myarr[p] = block[rewriten].split('')
        typePos[p] = 1
        ll[p] = 0
      }
    }else{
      block = props.children.split(/\r?\n/)
      for(let p = 0; p < block.length; p++){
        myarr[p] = block[p].split('')
        typePos[p] = 1
        ll[p] = 0
      }  
    }
    typeLoop()
  }

  function typeLoop () {
    let typed = []
    let loopTop = 1
    if(!rewriting){
      loopTop = rewpar
    }
    for(let p = 0; p < loopTop; p++){
      blurLoop(p)
      let line = ''
      if(myarr[p].length > 0){
        for(let w = 0; w < typePos[p]; w++){
          if(arr[ll[p]].toLowerCase() == myarr[p][w].toLowerCase()){
            if(typePos[p] < myarr[p].length){
              typePos[p]++
              ll[p] = Math.floor(Math.random() * arr.length)
              //ll[p] = 0
            }
          }
          if(myarr[p][w] == ' '){
            line += '='
          }else{
            line += myarr[p][w]
          }
        }
        if(typePos[p] == myarr[p].length){
          if(!rowDone[p]){
            rowDone[p] = true
            if(rewpar < myarr.length){
              rewpar++
            }
          }
          if(rewriten == exrewriten){
            rewriten++
          }
          typed[p] = line
        }else{
          typed[p] = line + arr[ll[p]]
        }
        ll[p]++
        if(ll[p] >= arr.length){
          ll[p] = 0
        }

      }else{
        if(!rowDone[p]){
          rowDone[p] = true
          if(rewpar < myarr.length){
            rewpar++
          }
        }
        typed[p] = line
      }
    }
    l++
    doOutput(typed)
    setBlur(bluring)
    
    if(!rewriting){
      aid = requestAnimationFrame(typeLoop)
    }else{
      if(l < rewPeriod){
        aid = requestAnimationFrame(typeLoop)
      }else{
        if(rewriten < (myarr.length + 1)){
          eraseText()
        }else{
          l = 0
          rollAllQuick()
        }
      }  
    }
  }

  function rollAllLoop () {
    l++
    rewTimer++
    let typed = []
    for(let b = 0; b < block.length; b++){
      if(block[b].length > 1 || block[b].length != undefined){
        
        blurLoop(b)

        if(l == pause){
          glitch[b] = true
          let newArr = [...glitchBool]
          newArr[b] = true
          setGlitchBool(newArr)
          for(let i = 0; i < block[b].length; i++){
            if(i == glitchpos[b]){
              ll[b][i] = Math.floor(Math.random() * arr.length)
            }
          }
        }
        
        typed[b] = ''
        for(let i = 0; i < block[b].length; i++){
          if(intro[b][i]){
            typed[b] += '_'
            if(l == starts[b][i]){
              intro[b][i] = false;
            }
          }else{
            if(block[b][i].toLowerCase() == arr[ll[b][i]].toLowerCase() && !rolling[b][i]){
              if(block[b][i] != ' '){
                typed[b] += block[b][i]
              }else{
                typed[b] += '='
              }
              if(glitch[b]){
                glitch[b] = false
                pause = Math.floor(Math.random() * 1000) + 500
                let newArr = [...glitchBool]
                newArr[b] = false
                setGlitchBool(newArr)
      
                glitchpos[b] = Math.floor(Math.random() * myarr[b].length)
                setGlitchIndex(glitchpos)
                rolling[b][glitchpos[b]] = true
                rollingT[b][glitchpos[b]] = Math.floor(Math.random() * 50) + 5
                l = 0
              }
            }else{
              ll[b][i]++
              if(ll[b][i] >= arr.length){
                ll[b][i] = 0
              }
              if(l > rollingT[b][i]){
                rolling[b][i] = false
              }
              if(glitch[b]){
                if(i == glitchpos[b]){
                  if(block[b][i] == ' '){
                    typed[b] += ' '
                  }else{
                    typed[b] += arr[ll[b][i]]
                  }
                }else{
                  typed[b] += block[b][i]
                }
              }else{
                typed[b] += arr[ll[b][i]]
              }
            }
          }
        }
      }
    }

    doOutput(typed)
    setBlur(bluring)

<<<<<<< HEAD
    if(rewTimer == rewNext){
      if(props.rewrite == null || props.children == undefined){
        return
      }
      rewriten = 1
=======
    if(rewTimer == rewNext && props.rewrite != undefined){
      rewriten = 0
>>>>>>> main
      revealing = false
      rewriting = true
      cancelAnimationFrame(aid)
      eraseText()
    }else{
      if(revealing){
        aid = requestAnimationFrame(rollAllLoop);
      }else{
        cancelAnimationFrame(aid)
      }
    }
  }

  useEffect(() => {
    if(block != false){
      if(props.method == 'quicktype'){
        typeText()
      }else{
        rollAll()
      }
    }
    return () => {
      cancelAnimationFrame(aid)
    }
  }, [])

  return (
    <Container>
      {out.map((line, index) => (
        <Fragment key={`line-${index}`}>
          {(out.length == 1)
          ?
            <span>
              {line.map((word, j) => (
                <span key={`word-${j}`}>
                  {word.map((char, h) => (
                    <span key={`char-${h}`} data-text={(char == '=') ? ' ' : char} className={`${(char == '_') ? 'opacity-0' : '' } ${(glitchIndex[index] == h) ? 'glitch' : ''} ${(blur.index[index] == h) ? 'blur blurOffset-' + blur.offset[index] : ''}`}>
                      {(char == '=') ? ' ' : char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          :
            <p>
            {line.map((word, j) => (
              <span key={`word-${j}`}>
                {word.map((char, h) => (
                  <span key={`char-${h}`} data-text={(char == '=') ? ' ' : char} className={`${(char == '_') ? 'opacity-0' : '' } ${(glitchIndex[index] == h) ? 'glitch' : ''} ${(blur.index[index] == h) ? 'blur blurOffset-' + blur.offset[index] : ''}`}>
                  {(char == '=') ? ' ' : char}
                  </span>
                ))}
              </span>
            ))}
            </p>
          }
        </Fragment>
      ))}
    </Container>
  )
}

const Reveal = (props) => {
  return (
    <LanguageConsumer>
      {({ lang }) => (
        <Box 
          method={props.method}
          lang={lang} 
          rewrite={props.rewrite} 
          rewriteRandom={props.rewriteRandom} 
          rewriteDelay={props.rewriteDelay} 
          delay={props.delay}
        >
          {props.children}
        </Box>
      )}
    </LanguageConsumer>
  )
}

Box.propTypes = {
  method: PropTypes.string,
  rewrite: PropTypes.string,
  rewriteRandom: PropTypes.string,
  rewriteDelay: PropTypes.string,
  lang: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

Reveal.propTypes = {
  method: PropTypes.string,
  rewrite: PropTypes.string,
  rewriteRandom: PropTypes.string,
  rewriteDelay: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default Reveal
