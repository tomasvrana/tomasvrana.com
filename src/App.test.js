import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import * as state from './state'

const getWrapper = props => {
  return shallow(
    <App
      element={(<p>Element</p>)}
      {...props}
    />
  ).dive()
}

describe('App', () => {
  let context
  beforeEach(() => {
    context = { theme: { example: 'theme' } }
    state.ThemeConsumer = jest.fn(props => props.children(context))
  })

  test('it renders correctly', () => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.children().children().dive()).toMatchSnapshot()
  })
})
