import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              米修在线
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              {/* <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" to="/profiles">开发者
                  </a>
                </li>
              </ul> */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    注册
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    登录
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
