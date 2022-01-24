import React from "react"
import amazonLogo from "../images/amazon.png"
import githubLogo from "../images/github.png"
import microsoftLogo from "../images/microsoft.png"
import tataLogo from "../images/tata.png"
import styles from "../styles/whatwedo.module.css"
import Header from "./Header"

const Card = ({ title, logo }) => {
  return (
    <section className={styles.card}>
      <img className={styles.cardImage} src={logo} alt="data" />
      <section>
        <p>{title}</p>
      </section>
    </section>
  )
}

const WhatWeDo = () => {
  const data = [
    {
      title: "Amazon",
      logo: amazonLogo,
    },
    {
      title: "GitHub",
      logo: githubLogo,
    },
    {
      title: "Microsoft",
      logo: microsoftLogo,
    },
    {
      title: "Tata",
      logo: tataLogo,
    },
  ]

  return (
    <section className={styles.main}>
      <section>
        <Header headerText={"Our Sponsors"} />
        <h1>Gaze upon our list of sponsors which played a major role to make it all transpire.</h1>
      </section>
      <section className={styles.cardContainer}>
        {data.map(item => (
          <Card
            title={item.title}
            content={item.content}
            logo={item.logo}
            key={item.title}
          />
        ))}
      </section>
    </section>
  )
}

export default WhatWeDo
