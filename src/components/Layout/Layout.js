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
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: -webkit-fill-available;
  
  @media only screen and (min-width: 1920px) {
    max-width: 1700px;
  }
  
  @media only screen and (min-width: 2500px) {
    max-width: 2000px;
  }
`

export default Layout
