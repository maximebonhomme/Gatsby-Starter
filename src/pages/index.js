import React from "react"

import Layout from "@components/layout"
import SEO from "@atoms/Seo"
import PageWrap from "@atoms/PageWrap"

const IndexPage = () => {
  return (
    <Layout>
      <SEO lang="en" title="Home" />
      <PageWrap>
        <h1>Home</h1>
      </PageWrap>
    </Layout>
  )
}

export default IndexPage
