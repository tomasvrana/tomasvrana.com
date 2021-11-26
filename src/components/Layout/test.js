import React from 'react'
import Layout from './'
import { shallow } from 'enzyme'
import * as state from '../../state'
import { setPageLoading } from '../../state/PageLoader'

function getWrapper (props) {
  return shallow(
    <Layout {...props}>
      <p>Some content</p>
    </Layout>
  ).dive()
}

describe('<Layout />', () => {
  let context
  beforeEach(() => {
    setPageLoading(true)
    context = { loading: true }
    state.PageLoaderConsumer = jest.fn(props => props.children(context))
  })

  test('it renders correctly when head data is provided', () => {
    expect(getWrapper({
      headData: {
        title: 'Testing'
      }
    })).toMatchSnapshot()
  })

  describe('when page is loading', () => {
    test('it renders correctly', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })

  describe('when page is not loading', () => {
    beforeEach(() => {
      setPageLoading(false)
      context = { loading: false }
    })

    test('it renders correctly', () => {
      expect(getWrapper()).toMatchSnapshot()
    })
  })
})
