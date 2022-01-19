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
`

export default Layout
