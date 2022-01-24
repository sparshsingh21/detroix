import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default () => {
  return (
    <section
      style={{
        backgroundColor: "#06061b",
        color: "#ffffff",
      }}
    >
      <Layout>
        <SEO title={"Contact"} />
        <Contact />
      </Layout>
    </section>
  )
}
