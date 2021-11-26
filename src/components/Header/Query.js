import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer, ThemeConsumer, HeaderConsumer } from '../../state'

const Query = ({ render }) => (
  <HeaderConsumer>
    {({ key: headerKey }) => (
      <ThemeConsumer>
        {({ themeString }) => (
          <LanguageConsumer>
            {({ lang }) => (
              <StaticQuery
                query={graphql`
                  query{
                    contentMarkdown: allFile(filter:{relativePath:{glob:"content/header/*.md"}}) {
                      nodes{
                        relativePath,
                        childMarkdownRemark{
                          frontmatter {
                            content {
                              title
                              navigation {
                                title
                                href
                              }
                            }
                          }
                        }
                      }
                    }
                    iconImages: allFile(filter:{relativePath:{glob:"images/*/phase-icons/*"}}) {
                      nodes {
                        relativePath
                        childImageSharp {
                          fluid(maxWidth:200) {
                            ...GatsbyImageSharpFluid_noBase64
                          }
                        }
                      }
                    }
                    backgroundImages: allFile(filter:{relativePath:{glob:"images/*/header-backgrounds/*"}}) {
                      nodes {
                        relativePath
                        childImageSharp {
                          fluid(maxWidth:2000) {
                            ...GatsbyImageSharpFluid_noBase64
                          }
                        }
                      }
                    }
                  }
                `}
                render={({ contentMarkdown, iconImages, backgroundImages }) => {
                  const content = contentMarkdown.nodes.filter(node => node.relativePath === `content/header/${lang}.md`).shift()
                  if (!content || !content.childMarkdownRemark) throw new Error(`No header translations found for language ${lang}`)
                  
                  return render({
                    content: content.childMarkdownRemark.frontmatter
                  })
                }}
              />
            )}
          </LanguageConsumer>
        )}
      </ThemeConsumer>
    )}
  </HeaderConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query
