import React from "react"

const IconGridItem = props => (
  <div className={`grid__item ${props.className}`}>
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  </div>
)

export default IconGridItem
