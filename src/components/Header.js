import React, { Component } from 'react';
import '../css/Header.css';
import LogoNav from './LogoNav';
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <header className="App-header" style={{  backgroundImage: `url(${this.props.bg})` }}>
        <LogoNav/>
        <div className="App-slogan">
          <h1>{this.props.title}</h1>
          <h3>{this.props.sub}</h3>
        </div>
      </header>
    );
  }
}

export default Header;
