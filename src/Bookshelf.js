import React from "react"
import ShelfUnit from "./ShelfUnit"
import "./App.css"

function Bookshelf() {
  return (
    <div>
      <ShelfUnit className="shelfUnit" />
      <ShelfUnit className="shelfUnit" />
    </div>
  )
}

export default Bookshelf
