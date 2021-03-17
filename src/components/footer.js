import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="footer__branding">
      <Link to="/">
        <img className="footer__logo" src="/images/ws-22.svg" alt="logo" />
      </Link>
    </div>
  </footer>
)

export default Footer
