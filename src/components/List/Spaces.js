import React, { Fragment } from 'react'
import Query from './SpacesQuery'
import List from './List'
import Title from './Title'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <Title title={frontmatter.content.title} />
        <List>
          {frontmatter.content.projects}
        </List>
      </Fragment>
    )}
  />
)
