import React, { Fragment } from 'react'
import Query from '../Queries/Nepu'
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
