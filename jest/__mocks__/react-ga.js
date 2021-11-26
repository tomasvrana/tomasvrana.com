const ReactGA = {
  initialize: jest.fn(),
  pageview: jest.fn(),
  modalview: jest.fn(),
  event: jest.fn(),
  timing: jest.fn(),
  exception: jest.fn()
}

export default ReactGA
