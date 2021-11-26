import themes from './'

const allThemes = Object.keys(themes)
const baseTheme = allThemes.shift()
describe('themes config', () => {
  let baseColors, baseDimensions, baseImages
  beforeEach(() => {
    baseColors = Object.keys(themes[baseTheme].colors)
    baseDimensions = Object.keys(themes[baseTheme].dimensions)
    baseImages = Object.keys(themes[baseTheme].images)
  })

  allThemes.forEach(theme => {
    describe(`'${theme}' config`, () => {
      let themeColors, themeDimensions, themeImages
      beforeEach(() => {
        themeColors = Object.keys(themes[theme].colors)
        themeDimensions = Object.keys(themes[theme].dimensions)
        themeImages = Object.keys(themes[theme].images)
      })

      test('colors are consistent across themes', () => {
        baseColors.forEach((color) => {
          expect(themeColors.includes(color)).toBe(true)
        })

        themeColors.forEach((color) => {
          expect(baseColors.includes(color)).toBe(true)
        })
      })

      test('dimensions are consistent across themes', () => {
        baseDimensions.forEach((dimension) => {
          expect(themeDimensions.includes(dimension)).toBe(true)
        })

        themeDimensions.forEach((dimension) => {
          expect(baseDimensions.includes(dimension)).toBe(true)
        })
      })

      test('images are consistent across themes', () => {
        baseImages.forEach((image) => {
          expect(themeImages.includes(image)).toBe(true)
        })

        themeImages.forEach((image) => {
          expect(baseImages.includes(image)).toBe(true)
        })
      })
    })
  })
})
