import React from "react"
import styles from "../styles/heromain.module.css"
import Particles from "react-particles-js"

function Heromain() {
  return (
    <React.Fragment>
      <section className={styles.main}>
        <Particles
          params={{
            particles: {
              number: {
                value: 0,
                density: { enable: true, value_area: 800 },
              },
              color: { value: "#ffffff" },
              shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
              },
              opacity: {
                value: 1,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 600 },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: { distance: 400, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          }}
          style={{
            backgroundColor: "#4242ae",
            position: "absolute",
            top: 60,
            left: 0,
            zIndex: -100,
            maxHeight: "calc(100vh - 58px)",
          }}
        />
        <h1 className={styles.mainText}>
          K.C Detroix
          <br /> 2021.
        </h1>
      </section>
    </React.Fragment>
  )
}

export default Heromain
