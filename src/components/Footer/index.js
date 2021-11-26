import React, { Fragment } from 'react'
import styled from 'styled-components'
import Query from './Query'

const Container = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  padding: 0 2rem;
  margin: 0 auto;
  display: block;
  letter-spacing: 0.08em;
  margin-top: 15rem;
  margin-bottom: 3rem;
  text-transform:uppercase;
  font-size:60%;
  letter-spacing:.2rem;

  img {
    margin: 0;
  }

  .left {
    text-align:left;
    float:left;
  }
  .right {
    text-align:right;
  }
`

const Footer = () => (
  <Container>
    <Query
      render={data => (
        <Fragment>
          <div className='left'>
            2022 &copy; {data.content.left}
          </div>
          <div className='right'>
            {data.content.rights}
          </div>
        </Fragment>
      )}
    />
  </Container>
)

export default Footer
