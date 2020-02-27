import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "../images/dev200-colored.svg"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 0.5em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: flex-start;
`

const HeaderLinks = styled("div")`
  display: flex;
  list-style: none;
  justify-content: space-around;

  max-width: 600px;
  width: 100%;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;

    padding: 70px 0;
    display: block;
    position: relative;

    &:after {
      content: "";
      width: 18px;
      height: 3px;
      background: transparent;
      bottom: -3px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const LogoWrap = styled("img")`
  height: 25vh;
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <LogoWrap src={Logo} />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/work">
          PROGRAMME
        </Link>
        <Link activeClassName="Link--is-active" to="/work">
          CITIES
        </Link>
        <Link activeClassName="Link--is-active" to="/work">
          APPLY
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          CONTACT
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
