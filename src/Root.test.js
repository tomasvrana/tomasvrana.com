import React from 'react'
import { mount } from 'enzyme'
import Root from './Root'
import * as url from './helpers/url'
import * as analytics from './helpers/analytics'

const getWrapper = props => {
  return mount(
    <Root
      element={(<p>Element</p>)}
      {...props}
    />
  )
}

describe('Root', () => {
  beforeEach(() => {
    analytics.autoCapture = jest.fn()
    url.getHref = jest.fn(() => 'https://example.org/')
    url.setHref = jest.fn()
  })

  test('it renders correctly', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  describe('when an invite token is not present in the URL', () => {
    beforeEach(() => {
      getWrapper()
    })

    test('it does not attempt to redirect to admin', () => {
      expect(url.setHref).not.toBeCalled()
    })
  })

  describe('when an invite token is present in the URL', () => {
    beforeEach(() => {
      url.getHref.mockReturnValue('https://example.org/#/invite_token=abcde')
    })

    test('it redirects to admin', () => {
      getWrapper()
      expect(url.setHref).toBeCalledWith('https://example.org/admin/#/invite_token=abcde')
    })
  })
})
