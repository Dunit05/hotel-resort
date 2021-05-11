import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className='navbar'>
        <Link to='/'>
          <img className='logo-nav' src={logo} alt='Beach Resort Logo' />
        </Link>
        <button type='button' className='nav-btn' onClick={this.handleToggle}>
          <FaAlignRight className='nav-icon' />
        </button>
      </nav>
    );
  }
}
