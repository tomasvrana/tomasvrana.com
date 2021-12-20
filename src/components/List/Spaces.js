import React, { Fragment } from 'react'
import Query from './SpacesQuery'
import List from './List'
import Title from '../Layout/Title'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <Title rewrite={frontmatter.content.title}>{frontmatter.content.title}</Title>
        <List href={frontmatter.content.href} children={frontmatter.content.projects} />
      </Fragment>
    )}
  />
)
