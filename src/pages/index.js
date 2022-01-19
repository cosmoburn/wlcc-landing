import React from "react"
import styled from '@emotion/styled'

import Layout from '../components/Layout/Layout'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <JumboText>
          under<br />
          construction
        </JumboText>
        <AltText>
          We're currently working on a brand new<br/> site, stay tuned for more!
        </AltText>
      </Main>
      <Footer />
      <CactusImage>
        <StaticImage src="../images/cactus.png" alt="Cactus with sunglasses" placeholder="transparent"/>
      </CactusImage>
    </Layout>
  )
}

const Main = styled.main`
  flex-grow: 1;
`

const JumboText = styled.div`
  font-size: 4rem;
  text-transform: uppercase;
  font-family: "Upheaval TT (BRK)", sans-serif;
  color: white;

  @media only screen and (min-width:632px) {
    font-size: 5rem;
  }
  
  @media only screen and (min-width:1080px) {
    font-size: 7.1rem;
  }
`

const AltText = styled.div`
  padding-top: 1rem;
  color: #556279;
  font-size: 1.25rem;

  @media only screen and (min-width:632px) {
    font-size: 1.5rem;
  }
  
  @media only screen and (min-width:1080px) {
    font-size: 2rem;
  }
`

const CactusImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: flex-end;

  @media only screen and (max-width:1080px) {
    max-width: 600px;
  } 
  
`

export default IndexPage
