import React from "react"
import footerStyles from "../styles/footer.module.css"
import instagramLogo from "../images/instagram-logo.svg"
import facebookLogo from "../images/facebook-logo.svg"
import youtubeLogo from "../images/youtube.svg"
import { Link } from "gatsby"

const Logo = ({ link, img, alt }) => {
  return (
    <i className={footerStyles.logo}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img style={{ height: "24px", width: "24px" }} src={img} alt={alt} />
      </a>
    </i>
  )
}

const Footer = () => {
  return (
    <footer className={footerStyles.container}>
      <section className={footerStyles.logoContainer}>
        <Logo
          link={""}
          img={instagramLogo}
          alt={"I"}
        />
        <Logo
          link={""}
          img={facebookLogo}
          alt={"f"}
        />
        <Link style={{ margin: "0px 15px" }} to="">
          <img
            style={{ height: "24px", width: "24px" }}
            src={youtubeLogo}
            alt={"YouTube"}
          />
        </Link>
      </section>
      <p className={footerStyles.text}>
        Tech Team © 2021 | Detroix
        <br />
        Made with ❤️ by{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.anchor}
          href="https://sparshsingh.com"
        >
          Sparsh Singh{" "}
        </a>
      </p>
    </footer>
  )
}

export default Footer
