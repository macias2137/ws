import * as React from "react"

import Header from "./header"
import DotImage from "./dot_image"
import "../styles/app.sass"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <DotImage />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
