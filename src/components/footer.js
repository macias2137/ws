import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="footer">
    <div className="footer__branding">
      <Link to="/">
        <img className="footer__logo" src="/images/ws-22.svg" alt="logo" />
      </Link>
    </div>
    <div className="footer__nav">
      <p>ZOBACZ WIĘCEJ</p>
      <div className="footer__nav__icons">
        <Link to="https://facebook.com/warsaw-streaming">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to="https://www.instagram.com/warsaw_streaming">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </Link>
        <Link to="https://www.linkedin.com/company/75721675">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
