/* Header is the nav bar component which houses different components
  based on whether or not you're signed in */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import Payments from './Payments';

class Header extends Component {

  renderContent() {
    /*switch statement on what value is being returned when
    fetching the current user */
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default:
        return [
          <li key={1}><Payments /></li>,
          <li key={2} style={{ margin: '0 10px'}}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key={3}><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
            style={{ marginLeft: '10px'}}
          >
            Gratifeed
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps ({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
