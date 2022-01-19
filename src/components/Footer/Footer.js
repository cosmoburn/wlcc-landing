import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => (
  <StyledFooter>
    <SocialContainer>
      <SocialButton href="https://twitter.com/WLCCNFT" target="_blank">
        <StaticImage src="../../images/twitter.svg" alt="Twitter" placeholder="blurred"/>
      </SocialButton>
      <SocialButton href="https://discord.gg/26rfMTjrhD" target="_blank">
        <StaticImage src="../../images/disco.svg" alt="Discord" placeholder="blurred"/>
      </SocialButton>
      <SocialButton href="https://opensea.io/collection/wlcc" target="_blank">
        <StaticImage src="../../images/opensea.svg" alt="Open Sea" placeholder="blurred"/>
      </SocialButton>
    </SocialContainer>
    <CactusImage>
      <StaticImage src="../images/cactus.png" alt="Cactus with sunglasses" placeholder="transparent"/>
    </CactusImage>
  </StyledFooter>
)

const StyledFooter = styled.div`
  padding: 2rem 0 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: relative;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SocialButton = styled.a`
  cursor: pointer;
  margin-right: 3rem;
`

const CactusImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80%;
  max-width: 420px;

  @media only screen and (min-width:632px) {
    max-width: 520px;
  }

  @media only screen and (min-width:1080px) {
    max-width: 620px;
  } 
  
`

export default Footer
