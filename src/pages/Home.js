import React, { Component } from 'react';
import '../css/Home.css';
import MainPage from '../components/MainPage';
import FrontPageContent from '../components/FrontPageContent';
import mainbg from '../assets/mainbg.jpg'
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <MainPage headbg={mainbg} headtitle="Костерок" headsub="Мы делаем то во что верим!">
          <FrontPageContent/>
        </MainPage>
    );
  }
}

export default Home;
