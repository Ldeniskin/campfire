import React, { Component } from 'react';
import vk from '../assets/vk.svg';
import ok from '../assets/ok.svg';
import fb from '../assets/fb.svg';
import '../css/Footer.css';
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="App-footer">
        <a href="https://ok.ru"><img src={ok} width={90} height={90} className="App-ok" alt="ok" /></a>
        <a href="https://vk.com"><img src={vk} width={90} height={90} className="App-vk" alt="vk" /></a>
        <a href="https://facebook.com"><img src={fb} width={90} height={90} className="App-fb" alt="fb" /></a>
      </footer>
    );
  }
}

export default Footer;
