import React from "react";
import { Link } from 'react-router'

const ACTIVE = { backgroundColor:'green',color:'white' }

export default React.createClass({
  render: function() {
    return (
     <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/breakfast" activeStyle={ACTIVE}><i className="fa fa-fw fa-hand-paper-o "></i> Breakfast</Link></li>
          <li><Link to="/lunch" activeStyle={ACTIVE}><i className="fa fa-fw fa-gears "></i> Lunch</Link></li>
          <li><Link to="/dinner" activeStyle={ACTIVE}><i className="fa fa-fw fa-paw "></i> Dinner</Link></li>
        </ul>
      </div>
   );
 },
});