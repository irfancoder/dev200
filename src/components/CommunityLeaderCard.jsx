import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import Logo from "../images/dev200-colored.svg"
import LinkedInLogo from "images/linkedin.svg"
import GithubLogo from "images/github.svg"

const Card = styled("div")`
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  height: 250px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }
`
const CardContent = styled("div")`
  display: flex;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`

const SocMedContent = styled("div")`
  display: flex;
  padding-top: 1em;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`
const ProfileName = styled("p")`
  padding-top: 0.5em;
  margin-bottom: 0;
  font-weight: 400;
`
const ProfileTitle = styled("span")`
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
`

const SocMed = styled("a")`
  max-width: 1em;
  margin-right: 1em;
`

const CommunityLeaderCard = ({ name, organisation, linkedin, github }) => {
  return (
    <Card>
      <CardContent>
        <img src={Logo} alt="" />
      </CardContent>
      <ProfileName>{name[0].text}</ProfileName>
      <ProfileTitle>{organisation[0].text}</ProfileTitle>
      <SocMedContent>
        {linkedin && (
          <SocMed href={linkedin.url}>
            <img src={LinkedInLogo} alt="" />
          </SocMed>
        )}
        {github && (
          <SocMed href={github.url}>
            <img src={GithubLogo} alt="" />
          </SocMed>
        )}
      </SocMedContent>
    </Card>
  )
}

export default CommunityLeaderCard
