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
  </StyledFooter>
)

const StyledFooter = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: fit-content;
`

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  align-items: center;
`

const SocialButton = styled.a`
  cursor: pointer;
`
export default Footer
