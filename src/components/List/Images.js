import React, { Fragment } from 'react'
import Query from './ImagesQuery'
import List from './List'
import Title from '../Layout/Title'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <Title>{frontmatter.content.title}</Title>
        <List href={frontmatter.content.href} children={frontmatter.content.projects} />
      </Fragment>
    )}
  />
)
