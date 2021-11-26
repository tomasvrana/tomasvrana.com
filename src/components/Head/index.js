import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer } from '../../state'
import { getURIPathWithoutLang, getHref } from '../../helpers/url'

const ALLOW_DUPLICATE_TAGS = [ 'og:locale:alternate' ]

function getGeneratedHeadData (availableLocales, locale) {
  const alternativeLocales = [ ...availableLocales ]
  alternativeLocales.splice(availableLocales.indexOf(locale), 1)
  return alternativeLocales.map(locale => ({
    name: 'og:locale:alternate',
    content: locale
  }))
}

function getHeadData ({ componentHeadData, pageHeadData, siteHeadData, availableLocales, locale }) {
  const filteredPageHeadData = {}
  Object.keys(pageHeadData).forEach(key => {
    if (pageHeadData[key]) filteredPageHeadData[key] = pageHeadData[key]
  })

  const metaNames = []
  const meta = []
  const unfilteredMeta = [
    ...(getGeneratedHeadData(availableLocales, locale)),
    ...(componentHeadData.meta || []),
    ...(filteredPageHeadData.meta || []),
    ...(siteHeadData.meta || [])
  ]

  unfilteredMeta.forEach((tag) => {
    if (!tag.content && !tag.file) return
    if (ALLOW_DUPLICATE_TAGS.includes(tag.name) || !metaNames.includes(tag.name)) meta.push({ name: tag.name, content: tag.content || getHref(tag.file) })
    metaNames.push(tag.name)
  })

  return {
    title: componentHeadData.title || filteredPageHeadData.title || siteHeadData.title,
    meta: meta.map(tag => {
      if (tag.name.match(/^og:/)) return { property: tag.name, content: tag.content }
      return tag
    })
  }
}

const Layout = ({ title, meta }) => (
  <LanguageConsumer>
    {({ lang, availableLocales, locale }) => (
      <StaticQuery
        query={graphql`
          query {
            siteHeadData: allFile(filter:{relativePath:{glob:"content/meta/__site.*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    head {
                      title
                      meta {
                        name
                        content
                        file
                      }
                    }
                  }
                }
              }
            }
            pageHeadData: allFile(filter:{relativePath:{regex:"/^content\/meta\/.*\\.md$/"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    head {
                      title
                      meta {
                        name
                        content
                        file
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ siteHeadData, pageHeadData }) => {
          const pageContentPath = getURIPathWithoutLang(lang) === '/'
            ? 'index'
            : getURIPathWithoutLang(lang).replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '___')
          const page = pageHeadData.nodes.filter(node => node.relativePath === `content/meta/${pageContentPath}.${lang}.md`).shift()
          const site = siteHeadData.nodes.filter(node => node.relativePath === `content/meta/__site.${lang}.md`).shift()
          const completeHeadData = getHeadData({
            componentHeadData: { title, meta },
            pageHeadData: (page && page.childMarkdownRemark.frontmatter && page.childMarkdownRemark.frontmatter.head) || {},
            siteHeadData: (site && site.childMarkdownRemark.frontmatter && site.childMarkdownRemark.frontmatter.head) || {},
            availableLocales,
            locale
          })

          return (
            <Helmet
              title={completeHeadData.title}
              meta={completeHeadData.meta}
            >
              <html lang={lang} />
            </Helmet>
          )
        }}
      />
    )}
  </LanguageConsumer>
)

Layout.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string,
    file: PropTypes.string
  }))
}

export default Layout
