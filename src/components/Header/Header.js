import React from 'react'
import styled from '@emotion/styled'
// import Logo from '/src/images/logo.png'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => (
  <StyledHeader>
    <StaticImage src="../../images/logo.png" alt="WLCC Logo" placeholder="transparent"/>
    <CactusButton>
      <span>Dashboard</span>
      <StaticImage src="../../images/arrow.svg" alt="Arrow Right" placeholder="transparent"/>
    </CactusButton>
  </StyledHeader>
)

const StyledHeader = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  }
`
export default Header
