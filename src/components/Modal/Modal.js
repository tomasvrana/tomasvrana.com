import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled, { keyframes } from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import TinyColor from '@ctrl/tinycolor'
import { getBody, addEventListener, removeEventListener, hideScrollBar, showScrollBar } from '../../helpers/dom'
import { getHashParam, setHashParam } from '../../helpers/url'
import { modalView } from '../../helpers/analytics'
import Link from '../Link'

const getModalBorderColor = theme => {
  const color = new TinyColor(theme.colors.primaryHighlight)
  color.setAlpha(0.5)
  return color.toRgbString()
}

const scaleIn = keyframes`
  0% {
    transform: scale(0.03, 0);
  }

  50% {
    transform: scale(0.03, 1);
  }

  100% {
    transform: scale(1, 1);
  }
`

const scaleOut = keyframes`
  0% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(0.03, 1);
  }

  100% {
    transform: scale(0.03, 0);
  }
`

const ModalContainer = styled.div`
  height: 100%;

  .modal-content-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0 solid ${({ theme }) => getModalBorderColor(theme)};
    border-top-width: 1.5rem;
    border-bottom-width: 1.5rem;

    .modal-content-inner-wrapper {
      position: absolute;
      z-index: 1;
      top: -1.5rem;
      bottom: -1.5rem;
      width: 100%;
      border: 0 solid ${({ theme }) => getModalBorderColor(theme)};
      border-left-width: 1.5rem;
      border-right-width: 1.5rem;
    }
  }

  .modal-content {
    transition: opacity 500ms ease-in-out;
    opacity: 1;
    height: 100%;
  }

  .modal-transition-leave {
    transform: scale(1);

    .modal-content {
      opacity: 0;
    }
  }

  .modal-transition-enter {
    transform: scale(0);

    .modal-content {
      opacity: 0;
    }
  }

  .modal-transition-enter-active {
    animation: ${scaleIn} 500ms ease-in-out;
    animation-iteration-count: 1;
  }

  .modal-transition-leave-active {
    animation: ${scaleOut} 600ms ease-in-out;
    animation-delay: 500ms;
    animation-iteration-count: 1;
  }
`

const CloseContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  width: 15rem;
  height: 15rem;
  border-radius: 7.5rem;
  transform: translate(50%, -40%);
  background-color: ${({ theme }) => theme.colors.primaryHighlight};

  a {
    color: ${({ theme }) => theme.colors.text};
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 4rem;
    transform: translate(-100%, -10%);
  }
`

export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // Modal name for tracking
    name: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = { renderModal: false, isVisible: getHashParam('modal') === props.name }
  }

  onClose = (e) => {
    e.preventDefault()
    setHashParam('modal', '')
  }

  renderCloseComponent () {
    return (
      <CloseContainer>
        <Link href='#' onClick={this.onClose} tracking={{ label: `modal_close_${this.props.name}` }}>
          <IoMdClose />
        </Link>
      </CloseContainer>
    )
  }

  trackView () {
    modalView(this.props.name)
  }

  onHashChange = () => {
    if (getHashParam('modal') === this.props.name && !this.state.isVisible) this.setState({ isVisible: true })
    if (getHashParam('modal') !== this.props.name && this.state.isVisible) this.setState({ isVisible: false })
  }

  componentDidMount () {
    this.setState({ renderModal: true })
    addEventListener('hashchange', this.onHashChange)
    if (this.state.isVisible) this.trackView()
  }

  componentWillUnmount () {
    removeEventListener('hashchange', this.onHashChange)
  }

  componentDidUpdate (_, prevState) {
    if (this.state.isVisible && !prevState.isVisible) this.trackView()
    if (!prevState.isVisible && this.state.isVisible) {
      hideScrollBar()
    } else if (prevState.isVisible && !this.state.isVisible) {
      showScrollBar()
    }
  }

  render () {
    if (!this.state.renderModal) return null
    return createPortal((
      <ModalContainer>
        <ReactCSSTransitionGroup
          transitionName='modal-transition'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={1000}
        >
          {this.state.isVisible &&
            <div className='modal-content-wrapper' key='modal-content-wrapper'>
              <div className='modal-content-inner-wrapper'>
                {this.renderCloseComponent()}
                <div className='modal-content'>
                  {this.props.children}
                </div>
              </div>
            </div>
          }
        </ReactCSSTransitionGroup>
      </ModalContainer>
    ), getBody())
  }
}
