import React, { Fragment } from 'react'
import styled from 'styled-components'
import LanguagePicker from './LanguagePicker'
import MediaQuery from 'react-responsive'
import { ThemeConsumer, MobileNavToggleConsumer } from '../../state'

const LanguageContainer = styled.div`
  position: absolute;
  z-index: 20;
  width:10rem;
  top: 0;
  right: 30px;

  width: 100%;
  max-width: 17rem;
  min-width: 12rem;
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  margin-left: auto;

  &.mobile {
    top: auto;
    bottom:0;
    right: auto;
    left: 0;
    width:100%;
    text-align: center;
    min-width: 1em;
    max-width: 1000em;
    margin:0;
    ul {
      width:100%;
      text-align: center;
    }
    button {
      color:white;
    }
  }

  > div {
    text-align: left;
    flex: 1;
  }
`

const PickerContainer = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <MobileNavToggleConsumer>
        {({ toggle }) => (
          <Fragment>
            <MediaQuery query={`(min-width: ${theme.dimensions.mobileBreakpoint}px)`}>
              <LanguageContainer>
                <div>
                  <LanguagePicker />
                </div>
              </LanguageContainer>
            </MediaQuery>
            <MediaQuery query={`(max-width: ${theme.dimensions.mobileBreakpoint - 1}px)`}>
              {toggle &&
                <LanguageContainer className='mobile'>
                  <div>
                    <LanguagePicker />
                  </div>
                </LanguageContainer>
              }
            </MediaQuery>
          </Fragment>
        )}
      </MobileNavToggleConsumer>
    )}
  </ThemeConsumer>
)

export default PickerContainer
