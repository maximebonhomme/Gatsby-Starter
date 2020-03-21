import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@xstyled/styled-components"
import "modern-normalize/modern-normalize.css"

import theme from "@utils/theme"

import "./base.css"

const Layout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
