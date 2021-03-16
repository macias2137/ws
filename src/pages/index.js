import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import IconGrid from "../components/icon_grid"
import LandingPage from "../components/landing"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingPage />
    <IconGrid />
  </Layout>
)

export default IndexPage
