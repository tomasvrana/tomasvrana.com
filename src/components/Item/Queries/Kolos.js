import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer } from '../../../state'

const Query = ({ render }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <StaticQuery
        query={graphql`
          query{
            allFile(filter:{relativePath:{glob:"content/projects/kolos/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    content {
                      title
                      subtitle
                      description
                      media
                      type
                      year
                      parent
                      cooperation
                      back
                      location
                      images {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/projects/kolos/${lang}.md`).shift()
          if (!content) throw new Error(`No content found for home page using language ${lang}`)
          return render(content.childMarkdownRemark)
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query
