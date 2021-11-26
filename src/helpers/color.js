import TinyColor from '@ctrl/tinycolor'
import logger from './logger'

const makeTransparent = (color, alpha) => {
  try {
    const c = new TinyColor(color)
    c.setAlpha(alpha)
    return c.toRgbString()
  } catch (error) {
    logger.error({
      description: 'error making color transparent',
      args: [ color, alpha ],
      error
    })
    return '#000000'
  }
}

export {
  makeTransparent
}
