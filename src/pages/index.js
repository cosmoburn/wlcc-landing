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
        <SocialContainer>
          <SocialButton href="https://twitter.com/WLCCNFT" target="_blank">
            <StaticImage width={60} src="../images/twitter.png" alt="Twitter" placeholder="blurred"/>
          </SocialButton>
          <SocialButton href="https://discord.gg/wlcc" target="_blank">
            <StaticImage width={60} src="../images/discord.png" alt="Discord" placeholder="blurred"/>
          </SocialButton>
          <SocialButton href="https://opensea.io/collection/wlcc" target="_blank">
            <StaticImage width={60} src="../images/opensea.png" alt="Open Sea" placeholder="blurred"/>
          </SocialButton>
        </SocialContainer>
      </Main>
      <Footer />
    </Layout>
  )
}

const Main = styled.main`
  flex-grow: 1;
`

const JumboText = styled.div`
  font-size: 3rem;
  text-transform: uppercase;
  font-family: "Upheaval TT (BRK)", sans-serif;
  color: white;

  @media only screen and (min-width:632px) {
    font-size: 4.5rem;
  }
  
  @media only screen and (min-width:1080px) {
    font-size: 7rem;
  }

  @media only screen and (min-width: 1920px) {
    margin-top: 4rem;
    font-size: 9rem;
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
    font-size: 1.75rem;
  }
  
  @media only screen and (min-width: 1920px) {
    font-size: 2.5rem;
  }
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  padding: 3rem 0;
  
  @media only screen and (min-width: 1920px) {
    padding: 8rem 0;
  } 
`

const SocialButton = styled.a`
  cursor: pointer;
  margin-right: 3rem;
  max-width: 38px;

  @media only screen and (min-width: 1080px) {
    max-width: 50px;
  }

  @media only screen and (min-width: 1920px) {
    max-width: initial;
  }
  
`

export default IndexPage
