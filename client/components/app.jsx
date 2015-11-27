'use strict';

import React from "react";
import ReactDOM from "react-dom";

import NavBar from "./navbar";

export default React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        {this.props.sidebar}
        <div className="mainContent">
          {this.props.content}
        </div>
     </div>
    )
  }
});
