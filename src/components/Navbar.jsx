import React from "react"
import "../styles/navbar.css"
import { Link } from "gatsby"

const menus = [
  // { id: 1, menuName: "Events", url: "/events" },
  { id: 1, menuName: "About", url: "/about" },
  // { id: 3, menuName: "Gallery", url: "/gallery"},
  { id: 2, menuName: "Register", url: "/register"},
]

function Navbar() {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/">
          <h4 className="logo">KC Detroix</h4>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          {menus.map(menu => {
            return (
              <Link
                key={menu.id}
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  color: "#000",
                }}
                to={menu.url}
              >
                <li className="menu-list">{menu.menuName}</li>
              </Link>
            )
          })}
        </ul>
      </header>
    </React.Fragment>
  )
}

export default Navbar
