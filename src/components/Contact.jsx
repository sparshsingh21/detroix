import React, { useState } from "react"
import styles from "../styles/contact.module.css"

const Button = ({ text, btnStyle, disabled }) =>
  disabled ? (
    <button className={btnStyle} type="submit" disabled>
      {text}
    </button>
  ) : (
    <button className={btnStyle} type="submit">
      {text}
    </button>
  )

const Contact = () => {
  const [state, setState] = useState({})
  let [isSent, setIsSent] = useState(false)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        document.getElementsByName("ecell-website-form")[0].reset()
        setIsSent(true)
        window.scrollTo(0, 0)
      })
      .catch(error => {
        alert("Try contacting us through our social media.")
      })
  }

  return (
    <section style={{ marginBottom: 10 }}>
      <h1 className={styles.header}>Contact Us</h1>
      <section className={styles.main}>
        <section className={styles.formContainer}>
          <form
            className={styles.form}
            name="ecell-website-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <label htmlFor="uname">Name: </label>
            <input
              className={styles.inputs}
              id="uname"
              type="text"
              name="User name"
              onChange={handleChange}
              required
            />
            <label htmlFor="uemail">Email: </label>
            <input
              className={styles.inputs}
              id="uemail"
              type="email"
              name="User email"
              onChange={handleChange}
              required
            />
            <label htmlFor="usubject">Subject: </label>
            <input
              className={styles.inputs}
              id="usubject"
              type="text"
              name="Subject"
              onChange={handleChange}
              required
            />
            <label htmlFor="umessage">Message: </label>
            <textarea
              className={styles.inputs}
              id="umessage"
              placeholder="Write message .."
              style={{ height: 120 }}
              name="message"
              onChange={handleChange}
              required
            ></textarea>
            {isSent ? (
              <Button
                btnStyle={styles.sentButton}
                text={"Sent"}
                disabled={true}
              />
            ) : (
              <Button btnStyle={styles.sendButton} text={"Send"} />
            )}
          </form>
        </section>
        <section className={styles.secondContainer}>
          {isSent ? (
            <p className={styles.text}>
              Thank you. <br />
              We will contact you shortly{" "}
              <span role="img" aria-label="Emoji">
                😊
              </span>
            </p>
          ) : (
            <p className={styles.text}>
              Ask us anything <br /> or <br /> Say Hi!{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </p>
          )}
        </section>
      </section>
    </section>
  )
}

export default Contact
