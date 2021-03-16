import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = props => (
  <header className="header">
    <div className="header__branding">
      <Link to="/">
        <img className="header__logo" src="/images/ws-22.svg" alt="logo" />
      </Link>
    </div>

    <div className="header__menu">
      <Link className="header__link__orange" to="/#onas">
        O nas
      </Link>
      <Link className="header__link__pink" to="/#realizacje">
        Realizacje
      </Link>
      <Link className="header__link__violet" to="/#kontakt">
        Kontakt
      </Link>
    </div>
  </header>
)

export default Header
