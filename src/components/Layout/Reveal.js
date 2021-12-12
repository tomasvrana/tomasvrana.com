import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LanguageConsumer, NavActiveConsumer, ThemeConsumer } from '../../state'

const Container = styled.span`
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
  transition:opacity 8s ease;
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
  const [ blurTimer, setBlurTimer ] = useState([])
  const [ blurOffset, setBlurOffset ] = useState([])
  const [ outArr, setOutArr ] = useState([])
  const [ glitchIndex, setGlitchIndex ] = useState([])
  const [ blurIndex, setBlurIndex ] = useState([])
  const [ blurBool, setBlurBool ] = useState([])
  const [ blurTime, setBlurTime ] = useState([])
  const [ glitchBool, setGlitchBool ] = useState([])
  let letters = `abcdefghijklmnopqrstuvwxyz-@,.' ()ěščřžýáíéúů:0123456789`
  if(props.lang == 'en'){
    letters = `abcdefghijklmnopqrstuvwxyz-@,.' ():0123456789`
  }
  let l = 0
  let bl = []
  let ll = []
  let blurOffsetVar = []
  let block = false
  if(props.children != null){
    block = props.children.split(/\r?\n/)
  }
  let starts = []
  let pause = Math.floor(Math.random() * 1000) + 200
  let glitch = []
  let blur = []
  let blurB = []
  let blurT = []
  let intro = []
  let rolling = []
  let rollingT = []
  let glitchpos = []
  let aid
  const arr = letters.split('')
  const myarr = []

  function revealTextSetup () {
    for(let b = 0; b < block.length; b++){
      myarr[b] = block[b].split('')
      pause = Math.floor(Math.random() * (((myarr[b].length < 100) ? (100 - myarr[b].length) : 1) * 100)) + 100
      glitch[b] = false
      blurB[b] = false
      ll[b] = []
      starts[b] = []
      intro[b] = []
      rolling[b] = []
      rollingT[b] = []
      glitchpos[b] = Math.floor(Math.random() * myarr[b].length)
      blur[b]= Math.floor(Math.random() * myarr[b].length)
      blurT[b] = Math.floor(Math.random() * (((myarr[b].length < 100) ? (101 - myarr[b].length) : 1) * 10))
      bl[b] = 0
      for(let i = 0; i < myarr[b].length; i++){
        ll[b][i] = Math.floor(Math.random() * arr.length)
        starts[b][i] = Math.floor(Math.random() * 100) + 10
        if(props.introVal){
          starts[b][i] = Math.floor(Math.random() * props.introVal) + 10
        }
        intro[b][i] = true
        rolling[b][i] = true
        rollingT[b][i] = Math.floor(Math.random() * 30) + ((myarr[b].length < 100) ? Math.abs(100 - myarr[b].length) : 0)
      }
    }
    setBlurTime(blurT)
    setGlitchIndex(glitchpos)
    setGlitchBool(glitch)
    setBlurBool(blurB)
    revealText()
  }

  function revealText () {
    l++
    let typed = []
    for(let b = 0; b < block.length; b++){
      if(block[b].length > 1 || block[b].length != undefined){
        bl[b]++    
        blurOffsetVar[b] = Math.floor(Math.random() * 5)
        setBlurOffset(blurOffsetVar)

        if(bl[b] == blurT[b]){
          if(blurB[b]){
            blurT[b] = Math.floor(Math.random() * 20) + 3
            bl[b] = 0
            blurB[b] = false
          }else{
            blur[b]= Math.floor(Math.random() * block[b].length)
            blurT[b] = Math.floor(Math.random() * (((myarr[b].length < 100) ? (101 - myarr[b].length) : 1) * 20))
            bl[b] = 0
            blurB[b] = true
          }
        }

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
                pause = Math.floor(Math.random() * (((myarr[b].length < 100) ? (100 - myarr[b].length) : 1) * 100)) + 100
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

    let resArr = []
    for(let b = 0; b < typed.length; b++){
      resArr[b] = typed[b].split(' ')
      for(let c = 0; c < resArr[b].length; c++){
        resArr[b][c] = resArr[b][c].split('')
      }
    }
    setOutArr(resArr)
    setBlurTimer(bl)
    setBlurIndex(blur)
    setBlurTime(blurT)
    setBlurBool(blurB)

    aid = requestAnimationFrame(revealText);
  }

  useEffect(() => {
    if(block != false){
      revealTextSetup()
    }
    return () => {
      cancelAnimationFrame(aid)
    }
  }, [])

  return (
    <Container>
      {outArr.map((line, index) => (
        <Fragment>
          {(outArr.length == 1)
          ?
            <span>
              {line.map((word, j) => (
                <span>
                  {word.map((char, h) => (
                    <span data-text={(char == '=') ? ' ' : char} className={`blurOffset-${blurOffset} ${(char == '_') ? 'opacity-0' : '' } ${(glitchIndex[index] == h) ? 'glitch' : ''} ${(blurIndex[index] == h) ? 'blur' : ''}`}>
                      {(char == '=') ? ' ' : char}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          :
            <p>
              {line.map((word, j) => (
                <span>
                  {word.map((char, h) => (
                    <span className={`${(char == '_') ? 'opacity-0' : '' } ${(glitchIndex[index] == h) ? 'glitch' : ''} ${(blurIndex[index] == h) ? 'blur' : ''}`}>
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
        <Box lang={lang} introVal={props.introVal}>{props.children}</Box>
      )}
    </LanguageConsumer>
  )
}

Box.propTypes = {
  lang: PropTypes.string,
  introVal: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

Reveal.propTypes = {
  introVal: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
}

export default Reveal
