import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => (
  <StyledHeader>
    <HeaderLogo>
      <StaticImage src="../../images/logo.png" alt="WLCC Logo" placeholder="transparent"/>
    </HeaderLogo>
    <CactusButton>
      <span>Dashboard</span>
      <StaticImage src="../../images/arrow.svg" alt="Arrow Right" placeholder="transparent"/>
    </CactusButton>
  </StyledHeader>
)

const StyledHeader = styled.div`
  padding: 2rem 0 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width:632px) {
    padding: 4rem 0;
  }
  
`
const HeaderLogo = styled.div`
  max-width: 170px;

  @media only screen and (min-width:632px) {
    max-width: initial;
  }
  
`

const CactusButton = styled.button`
  background: #A2E963;
  width: 155px;
  height: 51px;
  cursor: pointer;
  border: none;
  border-bottom: 5px solid #739E4C;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pixellari", sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  
  span {
    margin-right: .5rem;
    margin-top: 5px;
  }
`
export default Header
