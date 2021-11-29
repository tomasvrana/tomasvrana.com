import React, { Fragment } from 'react'
import Query from './ImagesQuery'
import List from './List'
import Title from './Title'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <Title title={frontmatter.content.title} />
        <List more={frontmatter.content.more} href={frontmatter.content.href}>
          {frontmatter.content.projects}
        </List>
      </Fragment>
    )}
  />
)
