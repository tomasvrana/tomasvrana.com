const moment = jest.requireActual('moment')

module.exports = {
  ...moment,
  locale: jest.fn()
}
