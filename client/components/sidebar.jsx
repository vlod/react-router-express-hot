import React from 'react'
import { Link } from 'react-router'

require('../css/sidebar.scss');

const ACTIVE = { backgroundColor:'green',color:'white' }

export default React.createClass({
  render: function() {
    return (
     <div className="sidebar">
        <ul className="nav nav-sidebar">
          <li>
            <Link to="/"><i className="fa fa-fw fa-home"></i>
              <span className="hidden-xs"> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/breakfast" activeStyle={ACTIVE}><i className="fa fa-fw fa-coffee "></i>
              <span className="hidden-xs"> Breakfast</span>
            </Link>
          </li>
          <li>
            <Link to="/lunch" activeStyle={ACTIVE}><i className="fa fa-fw fa-taxi"></i>
              <span className="hidden-xs"> Lunch</span>
            </Link>
          </li>
          <li>
            <Link to="/dinner" activeStyle={ACTIVE}><i className="fa fa-fw fa-cutlery "></i>
              <span className="hidden-xs"> Dinner</span>
            </Link>
          </li>
        </ul>
      </div>
   );
 }
});