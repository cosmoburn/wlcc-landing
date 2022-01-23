import React from 'react'
import styled from '@emotion/styled'
import './Layout.scss'

const Layout = ({ children }) => (
  <PageLayout>
    {children}
  </PageLayout>
)

const PageLayout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media only screen and (min-width: 1920px) {
    max-width: 1700px;
  }
  
  @media only screen and (min-width: 2600px) {
    max-width: 2000px;
  }
`

export default Layout
