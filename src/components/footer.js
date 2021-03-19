import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer id="kontakt" className="footer">
    <div className="footer__contact">
      <h1>
        KONTAKT
        <br />
        W SPRAWIE
        <br />
        OFERT
      </h1>
      <p>
        Maciej Moroz
        <br />
        maciej@warsawstreaming.pl
        <br />
        tel. 660 572 542
      </p>
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
