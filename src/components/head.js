import React from "react"
import { Helmet } from "react-helmet"

class Head extends React.Component {
  render() {
    return (
      <div >
        <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        </Helmet>
      </div>
    )
  }
}

export default Head