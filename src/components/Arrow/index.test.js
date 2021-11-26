import React from 'react'
import Arrow from './'
import { shallow } from 'enzyme'

function getWrapper (props) {
  return shallow(
    <Arrow {...props} />
  )
}

describe('<Arrow />', () => {
  test('it renders correctly with no props', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  test('it renders an "up" arrow correctly', () => {
    expect(getWrapper({ up: true })).toMatchSnapshot()
  })

  test('it renders a "right" arrow correctly', () => {
    expect(getWrapper({ right: true })).toMatchSnapshot()
  })

  test('it renders a "down" arrow correctly', () => {
    expect(getWrapper({ down: true })).toMatchSnapshot()
  })

  test('it renders a "left" arrow correctly', () => {
    expect(getWrapper({ left: true })).toMatchSnapshot()
  })

  test('it renders a "filled" arrow correctly', () => {
    expect(getWrapper({ fill: true })).toMatchSnapshot()
  })
})
