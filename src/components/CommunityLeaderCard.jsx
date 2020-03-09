import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import Logo from "../images/dev200-colored.svg"
import LinkedInLogo from "images/linkedin.svg"
import GithubLogo from "images/github.svg"
import WebsiteLogo from "images/web.svg"

const Card = styled("div")`
  display: block;
  transition: 0.3s;
  border-radius: 5px;
  width: 100%;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }
`
const CardContent = styled("div")`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  img {
    display: block;
    width: 100%;
    height: 200px;
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

const CommunityLeaderCard = ({
  name,
  organisation,
  linkedin,
  github,
  image,
  website,
}) => {
  return (
    <Card>
      <CardContent>
        {(image && <img src={image.url} alt={image.alt} />) || (
          <img src={Logo} />
        )}
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
        {website && (
          <SocMed href={website.url}>
            <img src={WebsiteLogo} alt="" />
          </SocMed>
        )}
      </SocMedContent>
    </Card>
  )
}

export default CommunityLeaderCard
