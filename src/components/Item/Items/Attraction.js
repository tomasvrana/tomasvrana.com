import React, { Fragment } from 'react'
import Query from '../Queries/Attraction'
import Item from '../Item'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Item 
        content={frontmatter.content} 
      />        
    )}
  />
)
