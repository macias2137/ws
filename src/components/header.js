import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = props => (
  <header>
    <div>
      <StaticImage
        height="4rem"
        className="logo"
        src="../images/logo-pis.png"
        alt="pischuj"
      />
    </div>
    <div className="menu-right"></div>
  </header>
)

export default Header
