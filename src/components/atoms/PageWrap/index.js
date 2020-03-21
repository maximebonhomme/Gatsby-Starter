import React from "react"
import styled from "@xstyled/styled-components"
import PropTypes from "prop-types"

const StyledPageWrap = styled.box`
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
`

const PageWrap = ({ children }) => {
  return <StyledPageWrap px={{ xs: 2, md: 3 }}>{children}</StyledPageWrap>
}

PageWrap.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrap
