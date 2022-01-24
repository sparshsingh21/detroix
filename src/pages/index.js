import React from "react"
import Layout from "../components/Layout"
import Heromain from "../components/Heromain"
import Activities from "../components/Activities"
import About from "../components/About"
import WhatWeDo from "../components/WhatWeDo"
import SEO from "../components/SEO"

export default () => {
  return (
    <Layout>
      <SEO title={"Home"} />
      <Heromain />
      <About />
      <WhatWeDo />
      <Activities />
    </Layout>
  )
}
