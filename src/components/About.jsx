import React from "react"
import aboutStyles from "../styles/about.module.css"
import Header from "./Header"
import { Link } from "gatsby"

const About = () => {
  return (
    <section className={aboutStyles.main}>
      <Header headerText={"Get to Know Detroix"} />
      <p className={aboutStyles.content}>
      IT IS MORE TECHNICAL THAN EVEN Welcome the the official homepage of Detroix where in you can expect all things technology. 

No matter if you're a rookie  at technology or a geek at it, we have something for everybody. </p>
       <Link to="/about"><button className={aboutStyles.button}>Learn More</button></Link>
    </section>
  )
}

export default About
