import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import '../css/MainPage.css';
import Header from './Header';
import MainMenu from './MainMenu';
import Footer from './Footer';
import mainbg from '../assets/mainbg.jpg';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let bg=mainbg;
    let title="";
    let sub="";
    if (this.props.headbg!== undefined){
      bg=this.props.headbg;
    }
    if (this.props.headtitle!== undefined){
      title=this.props.headtitle;
    }
    if (this.props.headsub!== undefined){
      sub=this.props.headsub;
    }
    return (
      <div className="App">
          <div>
            <Header bg={bg} title={title} sub={sub}/>
            <div className="App-body container-fluid">
              <Jumbotron>
                <MainMenu/>
                {this.props.children}
                <Footer/>
              </Jumbotron>
            </div>
          </div>
      </div>
    )
  }
}

export default MainPage;
