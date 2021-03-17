import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = props => (
  <header className="header">
    <div className="header__background" />
    <div className="header__branding">
      <Link to="/">
        <img className="header__logo" src="/images/ws-22.svg" alt="logo" />
      </Link>
    </div>

    <div className="header__menu">
      <Link to="/#onas">O nas</Link>
      <Link to="/#realizacje">Realizacje</Link>
      <Link to="/#kontakt">Kontakt</Link>
    </div>
  </header>
)

export default Header
