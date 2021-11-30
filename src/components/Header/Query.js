import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer, ThemeConsumer, HeaderConsumer } from '../../state'

const Query = ({ render }) => (
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
          }
        `}
        render={({ contentMarkdown }) => {
          const content = contentMarkdown.nodes.filter(node => node.relativePath === `content/header/${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No header translations found for language ${lang}`)
          
          return render({
            content: content.childMarkdownRemark.frontmatter
          })
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func
}

export default Query
