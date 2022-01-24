import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Register from "../components/Register"

export default () => {
  return (
    <section
      style={{
        backgroundColor: "#4242ae",
        color: "#ffffff",
      }}
    >
      <Layout>
        <SEO title={"Register"} />
        <Register />
      </Layout>
    </section>
  )
}