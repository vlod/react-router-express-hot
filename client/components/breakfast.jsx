import React from "react";

require("../css/breakfast.scss");

export default React.createClass({
  render: function() {
    return (
      <div className="container breakfast_page">
        <div className="col-xs-offset-4 col-xs-8 col-sm-offset-3 col-sm-9 col-md-offset-2 col-md-10">
          <h1>Breakfast menu</h1>
        </div>
      </div>
   );
 },
});