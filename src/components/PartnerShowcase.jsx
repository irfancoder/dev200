import React from "react"
import styled from "@emotion/styled"

const PartnerLogo = styled("img")`
  max-width: 200px;
  width: auto;
  height: auto;
`

const PartnerShowcase = ({ image }) => {
  console.log(image)
  return <PartnerLogo src={image.url} />
}

export default PartnerShowcase
