import React from "react"

const Header = ({ headerText }) => {
  return (
    <React.Fragment>
      <h1 style={{ fontWeight: 500, fontSize: "2.5rem" }}>{headerText}</h1>
    </React.Fragment>
  )
}

export default Header
