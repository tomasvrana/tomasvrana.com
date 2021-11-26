import React from 'react'
import * as gatsby from 'gatsby'
import { mount } from 'enzyme'
import { Provider, Consumer } from './Language'
import * as moment from 'moment'
import * as url from '../helpers/url'
import * as localStorage from '../helpers/localStorage'
import * as navigator from '../helpers/navigator'
import * as analytics from '../helpers/analytics'
import config from '../config'
import { LANGUAGE } from '../constants/analytics'

const getProvider = props => {
  return mount(
    <Provider
      children={(
        <Consumer>
          {({ lang, locale, availableLocales }) => (
            <div>
              <p key='current-lang'>{lang}</p>
              <p key='current-locale'>{locale}</p>
              <ul key='available-locales'>
                {availableLocales.map(locale => (
                  <li key={locale}>{locale}</li>
                ))}
              </ul>
            </div>
          )}
        </Consumer>
      )}
      {...props}
    />
  )
}

const availableLanguages = {
  en: { label: 'English', locale: 'en_GB' },
  ja: { label: 'Japanese', locale: 'ja_JA' },
  fr: { label: 'French', locale: 'fr_FR' }
}

describe('Language', () => {
  let originalAvailableLanguages
  beforeEach(() => {
    originalAvailableLanguages = { ...config.availableLanguages }
    url.getURIPath = jest.fn(() => '/')
    url.getHash = jest.fn(() => '')
    url.languageSetInURL = jest.fn()
    localStorage.getLocalStorageValue = jest.fn(() => '')
    localStorage.setLocalStorageValue = jest.fn()
    navigator.getNavigatorLanguage = jest.fn(() => '')
    analytics.autoCapture = jest.fn()
    config.availableLanguages = availableLanguages
  })

  afterEach(() => {
    config.availableLanguages = originalAvailableLanguages
  })

  test('the Provider renders correctly', () => {
    expect(getProvider()).toMatchSnapshot()
  })

  describe('when the component "mounts"', () => {
    let expectedLanguage
    beforeEach(() => {
      getProvider()
      expectedLanguage = Object.keys(availableLanguages).shift()
    })

    test('it sets the local storage language', () => {
      expect(localStorage.setLocalStorageValue).toBeCalledWith('lang', expectedLanguage)
    })

    test('it sets the moment locale', () => {
      expect(moment.locale).toBeCalledWith(expectedLanguage)
    })

    test('it does not track a language change', () => {
      expect(analytics.autoCapture).not.toBeCalled()
    })

    test('it navigates to the new URL', () => {
      expect(gatsby.navigate).toBeCalledWith(`/${expectedLanguage}/`)
    })
  })

  describe('when the language is in the URL', () => {
    describe('when the language is supported', () => {
      beforeEach(() => {
        url.getURIPath.mockReturnValue(`/${Object.keys(availableLanguages).pop()}/`)
      })

      test(`it renders with the '${Object.keys(availableLanguages).pop()}' language`, () => {
        expect(getProvider()).toMatchSnapshot()
      })
    })

    describe('when the language is not supported', () => {
      beforeEach(() => {
        url.getURIPath.mockReturnValue('/aaa/')
      })

      test(`it renders with the first supported language ('${Object.keys(availableLanguages)[0]}')`, () => {
        expect(getProvider()).toMatchSnapshot()
      })
    })
  })

  describe('when the language is set in local storage', () => {
    describe('when the language is supported', () => {
      beforeEach(() => {
        localStorage.getLocalStorageValue.mockImplementation(key => key === 'lang' && Object.keys(availableLanguages).pop())
      })

      test(`it renders with the '${Object.keys(availableLanguages).pop()}' language`, () => {
        expect(getProvider()).toMatchSnapshot()
      })
    })

    describe('when the language is not supported', () => {
      beforeEach(() => {
        localStorage.getLocalStorageValue.mockImplementation(key => key === 'lang' && 'aaa')
      })

      test(`it renders with the first supported language ('${Object.keys(availableLanguages)[0]}')`, () => {
        expect(getProvider()).toMatchSnapshot()
      })
    })
  })

  describe('when there is a language in the navigator', () => {
    describe('when the language is supported', () => {
      beforeEach(() => {
        navigator.getNavigatorLanguage.mockReturnValue(Object.keys(availableLanguages).pop())
      })

      test(`it renders with the '${Object.keys(availableLanguages).pop()}' language`, () => {
        expect(getProvider()).toMatchSnapshot()
      })
    })

    describe('when the language is not supported', () => {
      beforeEach(() => {
        navigator.getNavigatorLanguage.mockReturnValue('aaa')
      })

      test(`it renders with the first supported language ('${Object.keys(availableLanguages)[0]}')`, () => {
        expect(getProvider()).toMatchSnapshot()
      })
    })
  })

  describe('updating the language', () => {
    let wrapper, language
    beforeEach(() => {
      language = {}
      wrapper = getProvider({
        children: (
          <Consumer>
            {({ lang, locale, availableLocales, setLang }) => (
              <div>
                <p key='current-lang'>{lang}</p>
                <p key='current-locale'>{locale}</p>
                <ul key='available-locales'>
                  {availableLocales.map(locale => (
                    <li key={locale}>{locale}</li>
                  ))}
                </ul>
                <button onClick={() => setLang(language.language)}>Update language</button>
              </div>
            )}
          </Consumer>
        )
      })
    })

    describe('updating to an unsupported language', () => {
      beforeEach(() => {
        language.language = 'aaa'
      })

      test('an error is thrown', () => {
        expect(() => {
          wrapper.find('button').simulate('click')
        }).toThrowError(`Invalid language ${language.language}`)
      })
    })

    describe('updating to a supported language', () => {
      beforeEach(() => {
        language.language = Object.keys(availableLanguages)[1]
        wrapper.find('button').simulate('click')
      })

      test('it sets the local storage language', () => {
        expect(localStorage.setLocalStorageValue).toBeCalledWith('lang', language.language)
      })

      test('it sets the moment locale', () => {
        expect(moment.locale).toBeCalledWith(language.language)
      })

      test('it tracks the language change', () => {
        expect(analytics.autoCapture).toBeCalledWith({ category: LANGUAGE, label: language.language, action: 'updated_language' })
      })

      test('it navigates to the new URL', () => {
        expect(gatsby.navigate).toBeCalledWith(`/${language.language}/`)
      })
    })
  })
})
