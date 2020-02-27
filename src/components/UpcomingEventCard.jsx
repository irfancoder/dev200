import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Logo from "../images/dev200-colored.svg"
import VenueIcon from "images/venue.svg"
import DateIcon from "images/date.svg"
import TimeIcon from "images/time.svg"
import { Link, Date } from "prismic-reactjs"

const Card = styled("div")`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 300px;
  margin-right: 1em;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }
`
const CardContent = styled("div")`
  width: 100%;
  .img {
    display: block;
    max-width: 100%;
    border-radius: 5px;
  }
`
const Title = styled("h4")`
  font-weight: 400;
  margin: 0px;
  padding-bottom: 0.5em;
`
const Detail = styled("div")`
  display: flex;
  align-items: center;
  padding-top: 0.5em;
  white-space: normal;

  img {
    width: 3vh;
    border-radius: 0px;
  }
  span {
    padding-left: 1.2em;
    padding-top: 0.3em;
    font-size: 13px;
  }
`

const RegisterButton = styled("a")`
  margin-top: 10vh;
  align-self: flex-end;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 2px;
  color: #a4a4a4;
  text-transform: uppercase;
  font-family: HK Grotesk SemiBold;
  transition: 0.3s;
  &:hover {
    color: #e13600;
    font-family: HK Grotesk Bold;
  }
`

const DetailContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 2em 2em;
`

const Category = styled("div")`
  width: 100%;
  text-align: center;
  padding: 0.5em;
  font-size: 14px;
  background: green;
  letter-spacing: 4px;
  color: white;
  border-radius: 5px 5px 0 0;

  text-transform: uppercase;
  font-family: HK Grotesk Bold;
`

const UpcomingEventCard = ({
  title,
  category,
  image,
  venue,
  start_datetime,
  end_datetime,
  link,
}) => {
  console.log(start_datetime)

  const convertToDate = timestamp => {
    let convertedDate = Date(timestamp)

    const formattedTimestamp = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      // hour: "numeric",
      // minute: "2-digit",
      // second: "2-digit"
    }).format(convertedDate)
    return formattedTimestamp
  }
  const convertToTime = timestamp => {
    let convertedDate = Date(timestamp)

    const formattedTimestamp = Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(convertedDate)
    return formattedTimestamp
  }

  return (
    <Card>
      <CardContent>
        <Category>{category}</Category>
        <img src={Logo} alt="" />
        <DetailContainer>
          <Title>{title[0].text}</Title>
          <Detail>
            <img src={VenueIcon} />

            <span>{venue}</span>
          </Detail>
          <Detail>
            <img src={DateIcon} />
            {(start_datetime && (
              <span>
                {convertToDate(start_datetime)}-{convertToDate(end_datetime)}
              </span>
            )) || <span>N/A</span>}
          </Detail>
          <Detail>
            <img src={TimeIcon} />
            {(start_datetime && (
              <span>
                {convertToTime(start_datetime)}-{convertToTime(end_datetime)}
              </span>
            )) || <span>N/A</span>}
          </Detail>
          <RegisterButton href={link.url}>register</RegisterButton>
        </DetailContainer>
      </CardContent>
    </Card>
  )
}

export default UpcomingEventCard
