import React, { Fragment } from 'react'
import Query from '../Queries/Kolos'
import Item from '../Item'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Item 
        title={frontmatter.content.title} 
        image={frontmatter.content.image} 
        description={frontmatter.content.description} 
        images={frontmatter.content.images} 
        year={frontmatter.content.year} 
        type={frontmatter.content.type} 
        media={frontmatter.content.media} 
        location={frontmatter.content.location} 
      />        
    )}
  />
)
