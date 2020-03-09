import React from "react"
import styled from "@emotion/styled"

const PartnerLogo = styled("img")`
  max-width: 200px;
  width: auto;
  height: auto;
  display: block;
`

const PartnerShowcase = ({ image }) => {
  return <div>{image && <PartnerLogo src={image.url} alt={image.alt} />}</div>
}

export default PartnerShowcase
