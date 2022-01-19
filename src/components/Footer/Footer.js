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
        width={'1600'}
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
    max-width: 620px;
  }
  
  @media only screen and (min-width: 2000px) {
    max-width: 1600px;
  }

`

export default Footer
