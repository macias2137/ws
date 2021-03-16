import React from "react"

import IconGridItem from "./icon_grid_item"

const IconGrid = ({ props }) => (
  <section id="onas" className="icon__grid__section">
    <div className="icon__grid">
      <IconGridItem
        className="icon__grid__orange"
        title="dupcia"
        text="misiu"
      />
      <IconGridItem className="icon__grid__red" title="tyłeczek" text="żabko" />
      <IconGridItem
        className="icon__grid__pink"
        title="kuperek"
        text="pingwinku"
      />
      <IconGridItem
        className="icon__grid__violet"
        title="pupka"
        text="kaczuszko"
      />
    </div>
  </section>
)

export default IconGrid
