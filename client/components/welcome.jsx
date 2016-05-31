import React from 'react';
import { Link } from 'react-router';

import zippyImage from '../images/zippy.jpg';
require('../css/welcome.scss');

export default function Welcome() {
  return (
    <div className="container welcome_page">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-3 company_founder">
          <img src={zippyImage} title="zippy" alt="zippy" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9">
          <h1 className="text-center">Welcome to a Stub Project</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-10 col-sm-offset-4 col-sm-4 col-md-offset-8 col-md-3">
          <Link to="/breakfast" className="btn btn-block btn-lg btn-primary">
            Get Started
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          </Link>
        </div>
      </div>

    </div>
  );
}
