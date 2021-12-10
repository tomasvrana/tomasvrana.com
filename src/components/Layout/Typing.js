import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Typing = (props) => {
  const [ out, setOut ] = useState('')
  const lettersa = 'abcdefghijklmnopqrstuvxyz ,.'
  const letters = 'abcdefghijklmnopqrstuvxyz ,.ěščřžýáíéúů'
  let mystr = props.children
  let typed = ''
  let l = 0
  let p = 0
  let ll = []
  let toggle = true
  let aid
  const arr = letters.split('')
  const myarr = mystr.split('')

  function rollText () {
    if(p < mystr.length){
      toggle = !toggle;
      if (toggle) {
          aid = requestAnimationFrame(rollText);
          return;
      }
      typed = ''
      l++
      if(l >= arr.length){
        l = 0
      }
      if(myarr[p] == arr[l]){
        p++
      }
      for(let i = 0; i < p; i++){
        typed += myarr[i]
      }
      setOut(typed + arr[l])
      aid = requestAnimationFrame(rollText);
    }else{
      if(p == mystr.length){
        setOut(typed)
      }
      cancelAnimationFrame(aid)
    }
  }

  function revealTextSetup () {
    for(let i = 0; i < myarr.length; i++){
      ll[i] = Math.round(Math.random() * myarr.length)
    }
    revealText()
  }

  function revealText () {
    l++
    if(l % 1 == 0){
      const arr = letters.split('')
      const myarr = mystr.split('')
      
      typed = ''
      for(let i = 0; i < myarr.length; i++){
        if(myarr[i].toLowerCase() == arr[ll[i]].toLowerCase()){
          typed += myarr[i]
        }else{
          ll[i]++
          if(ll[i] >= arr.length){
            ll[i] = 0
          }  
          typed += arr[ll[i]]
        }
      }
      setOut(typed)
    }
    aid = requestAnimationFrame(revealText);
  }

  useEffect(() => {
    revealTextSetup()
    return () => {
      //cancelAnimationFrame(aid)
    }
  }, [])

  return (
    <Fragment>
      {out}
    </Fragment>
  )
}

Typing.propTypes = {
  children: PropTypes.children
}

export default Typing
