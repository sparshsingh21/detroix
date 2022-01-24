import React from "react"
import SEO from "../components/SEO"
import styles from "../styles/ked-talk-2020.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function KedTalk2020() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <SEO
        title={"KED Talk 2020 - Building your own personal brand in tech."}
      />
      <div className={styles.container}>
        <h1 className={styles.head1}>Building your personal brand in tech.</h1>
        <h1 className={styles.head2}>Manjula Dube & Vihang Patel</h1>
        <p>23 MAY 2020 | 12 PM IST</p>
        <iframe
          title="KED Talk 2020 - Building your own personal brand in tech."
          width="560"
          height="315"
          className={styles.video}
          src="https://www.youtube.com/embed/U8tTFf0UHi8"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  )
}

export default KedTalk2020
