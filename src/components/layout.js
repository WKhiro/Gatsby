import React from "react"
import { css } from "@emotion/core"
import "../style.css"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
