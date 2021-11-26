import React from 'react'
import { mount } from 'enzyme'
import { Provider, Consumer } from './CookieConsent'
import * as localStorage from '../helpers/localStorage'
import * as analytics from '../helpers/analytics'

const getProvider = props => {
  return mount(
    <Provider
      children={<p>Children</p>}
      {...props}
    />
  )
}

describe('CookieConsent', () => {
  beforeEach(() => {
    localStorage.getLocalStorageValue = jest.fn(() => '')
    localStorage.setLocalStorageValue = jest.fn()
    analytics.allowTracking = jest.fn()
  })

  test('the Provider renders correctly', () => {
    expect(getProvider()).toMatchSnapshot()
  })

  describe('allowing cookies', () => {
    let wrapper
    beforeEach(() => {
      wrapper = getProvider({
        children: (
          <Consumer>
            {({ allowCookies, setAllowCookies }) => (
              <div>
                <button onClick={() => setAllowCookies(true)} />
                {allowCookies &&
                  <p>Cookies allowed</p>
                }
              </div>
            )}
          </Consumer>
        )
      })

      wrapper.find('button').first().simulate('click')
    })

    test('it allows tracking', () => {
      expect(analytics.allowTracking).toBeCalled()
    })

    test('it sets the allowCookies local storage value to true', () => {
      expect(localStorage.setLocalStorageValue).toBeCalledWith('allowCookies', 'true')
    })

    test('it renders correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('disallowing cookies', () => {
    let wrapper
    beforeEach(() => {
      wrapper = getProvider({
        children: (
          <Consumer>
            {({ allowCookies, setAllowCookies }) => (
              <div>
                <button onClick={() => setAllowCookies(false)} />
                {allowCookies &&
                  <p>Cookies allowed</p>
                }
              </div>
            )}
          </Consumer>
        )
      })

      wrapper.find('button').first().simulate('click')
    })

    test('it does not allow tracking', () => {
      expect(analytics.allowTracking).not.toBeCalled()
    })

    test('it does not update the local storage value of allowCookies', () => {
      expect(localStorage.setLocalStorageValue).not.toBeCalled()
    })

    test('it renders correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('when the allowCookies value in local storage is true', () => {
    let wrapper
    beforeEach(() => {
      localStorage.getLocalStorageValue.mockImplementation((key) => key === 'allowCookies' && 'true')
      wrapper = getProvider({
        children: (
          <Consumer>
            {({ allowCookies }) => (
              <div>
                {allowCookies &&
                  <p>Cookies allowed via local storage</p>
                }
              </div>
            )}
          </Consumer>
        )
      })
    })

    test('it renders correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
