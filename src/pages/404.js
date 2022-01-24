import React from "react"
import "../styles/404.css"
import { Link } from "gatsby"
import SEO from "../components/SEO"

export default () => {
  //   useEffect(() => {
  //     let pageX =
  //       window.innerWidth ||
  //       document.documentElement.clientWidth ||
  //       document.body.clientWidth
  //     let pageY =
  //       window.innerHeight ||
  //       document.documentElement.clientHeight ||
  //       document.body.clientHeight

  //     let mouseY = 0
  //     let mouseX = 0

  //     document.addEventListener("mousemove", function(event) {
  //       //verticalAxis
  //       mouseY = event.pageY
  //       let yAxis = ((pageY / 2 - mouseY) / pageY) * 300

  //       //horizontalAxis
  //       mouseX = event.pageX / -pageX
  //       let xAxis = -mouseX * 100 - 100

  //       document.querySelector(
  //         ".box__ghost-eyes"
  //       ).style.transform = `translate(${xAxis}%,-${yAxis}%)`
  //     })

  //     return function() {
  //       document.removeEventListener("mousemove", () => {})
  //     }
  //   }, [])

  return (
    <React.Fragment>
      <SEO title={"404 - Page Not Found!"} />
      <section className="box">
        <section className="box__ghost">
          <section className="symbol"></section>
          <section className="symbol"></section>
          <section className="symbol"></section>
          <section className="symbol"></section>
          <section className="symbol"></section>
          <section className="symbol"></section>

          <section className="box__ghost-container">
            <section className="box__ghost-eyes">
              <section className="box__eye-left"></section>
              <section className="box__eye-right"></section>
            </section>
            <section className="box__ghost-bottom">
              <section></section>
              <section></section>
              <section></section>
              <section></section>
              <section></section>
            </section>
          </section>
          <section className="box__ghost-shadow"></section>
        </section>

        <section className="box__description">
          <section className="box__description-container">
            <section className="box__description-title">Whoops!</section>
            <section className="box__description-text">
              It seems like we couldn't find the page you were looking for
            </section>
          </section>
          <Link className="box__button" to="/">
            Go To Home
          </Link>
        </section>
      </section>
    </React.Fragment>
  )
}
