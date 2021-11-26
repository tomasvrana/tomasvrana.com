import React from 'react'
import Button from './'
import { shallow } from 'enzyme'

function getWrapper (props) {
  return shallow(
    <Button {...props}>
      I'm a button
    </Button>
  )
}

describe('<Button />', () => {
  describe('when no href or onClick is defined', () => {
    test('it throws an error', () => {
      expect(() => {
        getWrapper()
      }).toThrowError('Button must either have onClick or href prop')
    })
  })

  test('it renders a primary button correctly', () => {
    expect(getWrapper({
      onClick: jest.fn(),
      secondary: false,
      target: '_blank',
      title: 'Primary'
    })).toMatchSnapshot()
  })

  test('it renders a secondary button correctly', () => {
    expect(getWrapper({
      onClick: jest.fn(),
      secondary: true,
      target: '_blank',
      title: 'Secondary'
    })).toMatchSnapshot()
  })
})
