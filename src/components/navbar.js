import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import "../style.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">Wesley</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
