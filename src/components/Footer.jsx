import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "images/dev200-colored.svg"
import dimensions from "../styles/dimensions"

const FooterContainer = styled("div")`
  padding-top: 2em;
  padding-bottom: 3em;
  padding-left: ${dimensions.paddingHorizontalDesktop}em;
  padding-right: ${dimensions.paddingHorizontalDesktop}em;
  margin-top: 2.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
const FooterContent = styled("div")`
  display: flex;
`

const BigAssLogo = styled(Link)`
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: none;
  }
`

const FooterLinks = styled("div")`
  display: flex;
  list-style: none;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  height: 2vh;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    z-index: 2;
    position: fixed;
    background: white;
    height: 10vh;
    width: 100%;
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2);
    left: 0;
    bottom: 0;
    transition: all 1s ease-out;
  }

  a {
    color: #000000;
    text-decoration: none;
    font-weight: 600;
    display: flex-box;
    position: relative;
    &:hover {
      color: #e13600;
      font-family: HK Grotesk SemiBold;

      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const Deco_Bar = styled("div")`
  background: ${props => props.color};
  height: 2vh;
  width: 100%;
`

const FooterAddress = styled("div")`
  p {
    color: ${colors.gray};
    font-size: 14px;
    max-width: 256px;
    font-weight: 300;
  }
`

// &:hover {
//     &:after {
//       background: ${colors.white};
//       transition: 100ms ease-in-out background;
//     }
//   }

const date = new Date()
var year = date.getFullYear()

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;

  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};

    .FooterSpooch {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const MobileHome = styled(Link)`
  display: none;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
`

const Footer = () => (
  <div>
    <FooterContainer>
      <FooterContent>
        <BigAssLogo to="/">
          <img height="140" src={Logo} />
        </BigAssLogo>

        <FooterLinks>
          <MobileHome>{/* <Logo width="51.2px" height="25px" /> */}</MobileHome>
          <Link activeClassName="Link--is-active" to="/404">
            programme
          </Link>
          <Link activeClassName="Link--is-active" to="/404">
            cities
          </Link>
          <Link activeClassName="Link--is-active" to="/404">
            apply
          </Link>
          <Link activeClassName="Link--is-active" to="/404">
            contact
          </Link>
        </FooterLinks>
      </FooterContent>
      <FooterAddress>
        <p>
          A-2-29 - A-2-30 - A-2-31A and A-2-31B 2nd Floor Miri Times Square @
          Marina Parkcity, 98000 Miri, Sarawak
        </p>
      </FooterAddress>

      <FooterAuthor href="https://marguerite.io">
        © FOUNDERS™ {year}. All rights reserved.
      </FooterAuthor>
    </FooterContainer>
    <Deco_Bar color={colors.yellow} />
    <Deco_Bar color={colors.green} />
    <Deco_Bar color={colors.dblue} />
    <Deco_Bar color={colors.lblue} />
    <Deco_Bar color={colors.red} />
  </div>
)

export default Footer
