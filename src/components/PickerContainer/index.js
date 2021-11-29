import React, { Fragment } from 'react'
import styled from 'styled-components'
import LanguagePicker from './LanguagePicker'
import MediaQuery from 'react-responsive'
import { ThemeConsumer } from '../../state'

const BlockContainer = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  display: block;
  top: 0;
  padding: 0 ${({ theme }) => theme.dimensions.contentGutterSize};
  right: 10px;
  height: 0;

  &:hover {
    position: absolute;
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    top: .5rem;
    box-sizing: border-box;
  }
`

const LanguageContainer = styled.div`
  width: 100%;
  max-width: 17rem;
  min-width: 12rem;
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  margin-left: auto;

  &.short {
    width: auto;
    min-width: auto;
    margin-left: none;
  }

  > div {
    text-align: left;
    flex: 1;
  }
`

const PickerContainer = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Fragment>
        <BlockContainer>
          <MediaQuery query={`(min-width: ${theme.dimensions.mobileBreakpoint}px)`}>
            <LanguageContainer>
              <div>
                <LanguagePicker />
              </div>
            </LanguageContainer>
          </MediaQuery>
          <MediaQuery query={`(max-width: ${theme.dimensions.mobileBreakpoint - 1}px)`}>
            <LanguageContainer className='short'>
              <div>
                <LanguagePicker />
              </div>
            </LanguageContainer>
          </MediaQuery>
        </BlockContainer>
      </Fragment>
    )}
  </ThemeConsumer>
)

export default PickerContainer
