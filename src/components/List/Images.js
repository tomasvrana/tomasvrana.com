import React, { Fragment } from 'react'
import Query from './ImagesQuery'
import List from './List'
import Title from './TitleTag'
import Reveal from '../Layout/Reveal'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <Title><Reveal>{frontmatter.content.title}</Reveal></Title>
        <List href={frontmatter.content.href}>
          {frontmatter.content.projects}
        </List>
      </Fragment>
    )}
  />
)
