import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => (
  <StyledFooter>
    <CactusImage>
      <StaticImage
        src="../../images/cactus.png"
        alt="Cactus with sunglasses"
        placeholder="transparent"
        width={1600}
        height={'auto'}
      />
    </CactusImage>
  </StyledFooter>
)

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: relative;
`

const CactusImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media only screen and (min-width:632px) {
    max-width: 520px;
  }

  @media only screen and (min-width:1080px) {
    max-width: 640px;
  }
  
  @media only screen and (min-width:1440px) {
    max-width: 800px;
  }
  
  @media only screen and (min-width: 1920px) {
    max-width: 1000px;
  }
  
  @media only screen and (min-width: 2500px) {
    max-width: 1400px;
  }

`

export default Footer
