import React from "react"

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
const Title = styled("p")`
  padding-top: 0.5em;
  margin-bottom: 0;
  font-weight: 400;
`
const Detail = styled("span")`
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 700;
`

const DetailContainer = styled("div")``

const UpcomingEventCard = () => {
  return <Card></Card>
}

export default UpcomingEventCard
